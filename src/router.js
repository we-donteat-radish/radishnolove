import vue from 'vue';
import vueRouter from 'vue-router';

//将页面导入路由
// import test from './pages/test.vue';
import faxian from './pages/faxian.vue';

vue.use(vueRouter);

const routes = [{
    path: '/',
    component: faxian
}]

const router = new vueRouter({ routes, mode: 'history' })
export default router;