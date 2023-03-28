/*忽略报错*/
declare module '*.vue' {
    import type { DefineComponent } from "vue";
    const component: DefineComponent<{}, {}, any>
    export default component
}

// 配置环境变量
interface ImportMetaEnv {
    readonly APP_BASE_API: string;
    readonly APP_NODE_ENV: string;
}

// interface ImportMetaEnv {
//     readonly APP_BASE_API: string;
//     readonly APP_NODE_ENV: string;
// }
// interface ImportMeta {
//     readonly env: ImportMetaEnv
// }