import type { UserConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from "path"

const config: UserConfig = {
    plugins: [vue()],
    server: {
        host: '0.0.0.0',
        open: true,//启动项目自动弹出浏览器
        port: 4000,//启动端口
        proxy: {
            '/api': {
                target: 'https://928a6c57-d243-4dce-a4ee-388405267fa5.mock.pstmn.io',	//实际请求地址
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, '')
            },
        }
    },
    resolve: {
        // ↓路径别名
        alias: {
            "@": resolve(__dirname, "./src")
        }
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `@import "@/style/mixin.scss";`
            }
        }
    },
    envPrefix: "APP_",
}
export default config