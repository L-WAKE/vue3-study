import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from "path"

export default ({ mode }) => {
    const env: any = loadEnv(mode, process.cwd());   // 获取.env文件里定义的环境变量-对象类型
    return defineConfig({
        plugins: [vue()],
        build: {
            minify: 'terser',
            terserOptions: {
                compress: {
                    //生产环境时移除console/debugger
                    drop_console: env.VITE_NODE_ENV === 'production',
                    drop_debugger: env.VITE_NODE_ENV === 'production',
                },
            },
        },
        //项目部署在主域名的子文件使用,例如http://localhost:3000/myvite/。不填默认就是/
        // base: env.VITE_APP_BASE_URL || '/',
        server: {
            host: '0.0.0.0',
            open: false,//启动项目自动弹出浏览器
            port: 4000,//启动端口
            proxy: {
                '/api': {
                    target: env.VITE_BASE_API,	//实际请求地址
                    changeOrigin: true,
                    rewrite: (path) => path.replace(/^\/api/, '')
                },
            }
        },
        resolve: {
            // ↓路径别名
            alias: {
                "@": resolve(__dirname, "./src")
            },
            dedupe: ['vue']
        },
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: `@import "@/style/mixin.scss";`
                }
            }
        },
        // envPrefix: "APP_",
    })
}