import Vue from "vue";
import Router from "vue-router";
import Tip404 from "@/pages/exception/404";
import MainLayout from "@/layout/MainLayout";
import ApiLayout from "@/pages/Api";

Vue.use(Router);
export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      component: MainLayout,
      children: [
        {
          path: "",
          name: "home",
          component: () => import("@/pages/Home"),
        },
        {
          path: "/api",
          component: ApiLayout,
          children: [
            {
              path: "all",
              name: "all",
              component: () => import("@/pages/Api/components/AllApi"),
              children: [
                {
                  path: "inner",
                  name: "inner",
                  component: () =>
                    import("@/pages/Api/components/InnerOrOuter"),
                },
                {
                  path: "outer",
                  name: "outer",
                  component: () =>
                    import("@/pages/Api/components/InnerOrOuter"),
                },
                {
                  path: "serverDetail",
                  name: "serverDetail",
                  component: () =>
                    import("@/pages/Api/components/InnerOrOuter"),
                },
              ],
            },
            {
              path: "publish",
              name: "publish",
              component: () => import("@/pages/Api/components/Publish"),
            },
            {
              path: "export",
              name: "export",
              component: () => import("@/pages/Api/components/Export"),
            },
          ],
        },
      ],
    },
    {
      path: "/login",
      name: "login",
      component: () => import("@/pages/Login"),
    },
    {
      path: "/404",
      name: "tip404",
      component: Tip404,
    },
    {
      path: "/",
      redirect: "/home",
    },
    {
      path: "*",
      redirect: "/404",
    },
  ],
});
