import { createApp } from 'vue';
import './style.scss';
import App from './App.vue';
import 'ant-design-vue/dist/reset.css';
import router from './router';
import { debounce } from 'providers';

declare module "vue" {
    interface ComponentCustomProperties {
        $debounce: any
    }
}

const app = createApp(App);

app.config.globalProperties.$debounce = debounce;

app.use(router);
app.mount('#app');
