import vue from 'vue';
import vueRouter from 'vue-router';

//将页面导入路由
import test from './pages/test.vue';

vue.use(vueRouter);

const routes = [{
    path: '/',
    component: test
}]

const router = new vueRouter({ routes, mode: 'history' })
export default router;