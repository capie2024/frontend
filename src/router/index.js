import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CardInfo from "../views/CardInfo.vue";
import WorkShopView from "@/views/WorkShopView.vue";
import HeroMemberView from "@/views/HeroMemberView.vue";
import AccountPage from "@/views/AccountPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/card-info",
      name: "card-info",
      component: CardInfo,
    },
    {
      path: "/work-shop",
      name: "work-shop",
      component: WorkShopView,
    },
    {
      path: "/hero-member",
      name: "hero-member",
      component: HeroMemberView,
    },
    {
      path: '/daily-card',
      name: 'daily-info',
      component: () => import('../views/DailyCard.vue')
    },
    {
      path: '/faq',
      name: 'faq',
      component: () => import('../views/Faq.vue')
    }
    {
      path: "/account-page",
      name: "account-page",
      component: AccountPage,
    },
  ],
});

export default router;
