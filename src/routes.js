/* Components */
import Home from './pages/home.vue';
import PostSingle from "./pages/post-single.vue";

let routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/post/:post',
        name: 'post-single',
        component: PostSingle
    },
];

export default routes;
