import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import My from '@/views/My'
import Myi from "@/views/Myi";
import Message from "@/views/Message";
import Nearby from "@/views/Nearby";
import Shop from "@/views/Shop";

Vue.use(VueRouter)


const router = new VueRouter({
  routes: [
    { path: "/home", component: Home },
    { path: "/message", component: Message },
    { path: "/nearby", component: Nearby },
    { path: "/shop", component: Shop },
    { path: "/my", component: My },
    { path: "/myi", component: Myi },
    { path: "", redirect: "/home" },
  ],
});

export default router
