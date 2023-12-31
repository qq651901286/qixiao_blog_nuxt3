// https://nuxt.com/docs/api/configuration/nuxt-config
import {createSvgIconsPlugin} from 'vite-plugin-svg-icons'
import path from 'path'

export default defineNuxtConfig({
    vite: {
        plugins: [
            createSvgIconsPlugin({
                iconDirs: [path.resolve(process.cwd(), 'assets/svg')]
            })
        ],
    },
    devtools: {enabled: true},
    css: [
        // 导入reset.scss文件
        '@/assets/css/reset.scss',
    ],
    app: {
        // SEO一些配置
        head: {
            charset: 'utf-8',
            title: '奇小博客',
            meta: [
                // <meta name="description" content="My amazing site">
                {name: '奇小博客', content: '奇小博客系统可以用来记录你的往事！'}
            ],
        },
        // https://nuxt.com.cn/docs/getting-started/transitions
        // Nuxt利用Vue的<Transition>组件在页面和布局之间应用过渡。
        pageTransition: {
            name: 'page', mode: 'out-in'
        }
    },
    modules: [
        '@element-plus/nuxt',
        '@pinia/nuxt',
    ],
    elementPlus: {
        /** Options */
    }
})
