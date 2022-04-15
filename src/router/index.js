import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Counter from '../components/Counter.vue'
import Form from '../components/Form.vue'
import Timer from '../components/Timer.vue'
import Todo from '../components/TodoPart.vue'
import Blogs from '../components/Blogs.vue'
import Blog from '../components/Blog.vue'
import Food from '../components/Food.vue'


const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/counter',
        name: 'Counter',
        component: Counter
    },
    {
        path: '/form',
        name: 'Form',
        component: Form
    },
    {
        path: '/timer',
        name: 'Timer',
        component: Timer
    },
    {
        path: '/todo',
        name: 'Todo',
        component: Todo
    },
    {
        path: '/blogs',
        name: 'Blogs',
        component: Blogs
    },
    {
        path: '/blogs/:id',
        name: 'Blog',
        component: Blog
    },

    {
        path: '/food-choice',
        name: 'Food',
        component: Food
    },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
