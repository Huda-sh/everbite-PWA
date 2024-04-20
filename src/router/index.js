import { createRouter, createWebHistory } from 'vue-router'
import HomeView from "@/views/HomeView.vue";
import Restaurant from "@/components/Cards/Restaurant.vue";
import Categories from "@/views/Categories.vue";
import MenuItems from "@/views/MenuItems.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/restaurant',
      name: 'restaurant',
      component: Restaurant
    },
    {
      path: '/categories',
      name: 'categories',
      component: Categories
    },
    {
      path: '/menu-items',
      name: 'menu-items',
      component: MenuItems
    },
  ]
})

export default router
