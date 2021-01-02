/* Components */
import Home from './pages/home.vue';
import PostSingle from "./pages/post-single.vue";
import registerPage from "./pages/auth/register.vue"

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
    {
        path: '/register',
        name: 'register-page',
        component: registerPage
    },
];

export default routes;
