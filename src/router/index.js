import Vue from 'vue';
import Router from 'vue-router';
import textbook from '../views/textbook.vue'
import referbook from '../views/referbook.vue'
import tour from '../views/tour.vue'
import food from '../views/food.vue'
import App from '../App.vue'
import Home from '../Home.vue'


Vue.use(Router);

const createRouter = () => new Router({
    routes: [{
        path: '/',
        component: Home,
        meta: {},
        children: [
            {
                path: 'textbook',
                name: '教材',
                component: textbook,
            },
            {
                path: 'referbook',
                name: '教辅',
                component: referbook,
            },
            {
                path: 'tour',
                name: '旅游',
                component: tour,
            },
            {
                path: 'food',
                name: '美食',
                component: food,
            },
        ]
    }],
});

const router = createRouter();

export default router;
