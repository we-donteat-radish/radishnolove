import vue from 'vue';
import vueRouter from 'vue-router';

//将页面导入路由
import test from './pages/test.vue';
import pit from './pages/pit.vue';
import msg from './pages/msg.vue';
import mine from './pages/mine.vue';
import comment from './pages/comment.vue';

vue.use(vueRouter);

const routes = [
	{
		path: '/',
		component: test
	},
	{
		path: '/pit',
		component: pit
	},
	{
		path: '/msg',
		component: msg,
	},
	{
		path: '/mine',
		component: mine
	},
	{
		path:'/comment',
		component:comment
	}
]
const router = new vueRouter({ routes, mode: 'history' })
export default router;