import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CardInfo from "../views/CardInfo.vue";
import WorkShopView from "@/views/WorkShopView.vue";
import HeroMemberView from "@/views/HeroMemberView.vue";
import OfficialProductList from "@/views/OfficialProductList.vue";
import CardListbySeries from "@/views/Card List by Series.vue";
import MainPage from "@/views/MainPage.vue";
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

      path: "/OfficialProductList",
      name: "OfficialProductList",
      component: OfficialProductList,
    },
    {
      path: "/Card-List-by-Series",
      name: "CardListbySeries",
      component: CardListbySeries,
    },

      path: '/daily-card',
      name: 'daily-info',
      component: () => import('../views/DailyCard.vue')
    },
    {
      path: '/faq',
      name: 'faq',
      component: () => import('../views/Faq.vue')
    },
    {
      path: '/faq-info',
      name: 'faq',
      component: () => import('../views/FaqInfo.vue')
    },
    {
      path: "/main-page",
      name: "main-page",
      component: MainPage,
    },
    {
      path: "/account-page",
      name: "account-page",
      component: AccountPage,
    },

      name: 'faq-info',
      component: () => import('../views/FaqInfo.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Login.vue')
    }

  ],
});

export default router;
