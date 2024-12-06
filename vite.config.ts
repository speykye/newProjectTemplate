import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { fileURLToPath, URL } from 'node:url';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import Components from 'unplugin-vue-components/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';
import AutoImport from 'unplugin-auto-import/vite';

export default defineConfig({
  plugins: [
    vue(),
    Components({
      deep: true,
      resolvers: [
        AntDesignVueResolver({
          importStyle: false
        })
      ]
    }),
    AutoImport({
      imports: ["vue", "vue-router", "pinia"]
    }),
    ViteImageOptimizer()
  ],
  server: {
    host: true,
    open: true
  },
  resolve: {
    alias: { '@': fileURLToPath(new URL('./src', import.meta.url))}
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
        silenceDeprecations: ['legacy-js-api'],
        additionalData: `@use "@/assets/public.scss" as *;`
      }
    }
  }
})
