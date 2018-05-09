import Vue from 'vue';
import Router from 'vue-router';
import textbook from '../views/textbook.vue'
import referbook from '../views/referbook.vue'
import tour from '../views/tour.vue'
import food from '../views/food.vue'
import style from '../views/style.vue'
import life from '../views/life.vue'
// import App from '../App.vue'
import Particles from '../particles.vue';


Vue.use(Router);

const createRouter = () => new Router({
    routes: [
            {
                path: '/',
                name: '教材',
                component: Particles,
            },
            {
                path: '/textbook',
                name: '教材',
                component: textbook,
            },
            {
                path: '/referbook',
                name: '教辅',
                component: referbook,
            },
            {
                path: '/tour',
                name: '旅游',
                component: tour,
            },
            {
                path: '/food',
                name: '饮食',
                component: food,
            },
            {
                path: '/style',
                name: '穿着',
                component: style,
            },
            {
                path: '/life',
                name: '生活',
                component: life,
            },
        ]
});

const router = createRouter();

export default router;
