import {createRouter,createWebHashHistory} from 'vue-router';
import Home from '../components/Home.vue';
import Personal from '../components/personal.vue';
import ScrollDemo from '../components/scrollDemo.vue';

const routes = [
    {
        path:'/',
        name:'Home',
        component: Home,
    },
    {
        path:'/scroll_demo',
        name:'ScrollDemo',
        component: ScrollDemo,
    },
    {
        path:'/personal',
        name:'Personal',
        mate:{
            islog:true,
        },
        component: Personal,
    },
];
const router = createRouter({
    mode:'hash',
    //history: createWebHistory(process.env.BASE_URL),
    history: createWebHashHistory(process.env.BASE_URL),
    routes,
});


export default router;