import { createRouter, createWebHistory } from "vue-router";
import appPageMain from "../views/appPageMain";
import appPageAbout from "@/views/appPageAbout";
import appPageAboutHistory from "@/views/appPageAboutHistory";
import appPageNews from "@/views/appPageNews";
import appPageNewsId from "@/views/appPageNewsId";
import appPageCutting from "@/views/appPageCutting";
import appPageUniqueCutting from "@/views/appPageUniqueCutting";
import appPageJobs from "@/views/appPageJobs";
import appPageJobId from "@/views/appPageJobId";
import appPagePartners from "@/views/appPagePartners";
import appPageClients from "@/views/appPageClients";
import appPageCatalog from "@/views/appPageCatalog";
import appPageCatalogId from "@/views/appPageCatalogId";
import appPage404 from "@/views/appPage404";

export default createRouter({
  mode: "history",

  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "appPageMain",
      component: appPageMain,
    },
    {
      path: "/about",
      name: "appPageAbout",
      component: appPageAbout,
    },
    {
      path: "/about/history",
      name: "appPageAboutHistory",
      component: appPageAboutHistory,
    },
    {
      path: "/news",
      name: "appPageNews",
      component: appPageNews,
    },
    {
      path: "/news/:newsId",
      name: "appPageNewsId",
      component: appPageNewsId,
    },
    {
      path: "/cutting",
      name: "appPageCutting",
      component: appPageCutting,
    },
    {
      path: "/cutting/:packetId",
      name: "appPageUniqueCutting",
      component: appPageUniqueCutting,
    },
    {
      path: "/jobs",
      name: "appPageJobs",
      component: appPageJobs,
    },
    {
      path: "/jobs/:jobId",
      name: "appPageJobId",
      component: appPageJobId,
    },
    {
      path: "/partners",
      name: "appPagePartners",
      component: appPagePartners,
    },
    {
      path: "/clients",
      name: "appPageClients",
      component: appPageClients,
    },
    {
      path: "/catalog",
      name: "appPageCatalog",
      component: appPageCatalog,
    },
    {
      path: "/catalog/:catalogId",
      name: "appPageCatalogId",
      component: appPageCatalogId,
    },
    {
      path: "/404",
      name: "404",
      component: appPage404,
    },
    {
      path: "/:pathMatch(.*)*",
      redirect: "/404",
    },
  ],
});
