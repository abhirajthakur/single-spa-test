import { registerApplication, start } from "single-spa";

registerApplication({
  name: "dashboard",
  app: () => import("../../dashboard-app/dashboard-single-spa.js"),
  activeWhen: "/dashboard",
});

registerApplication({
  name: "profile",
  app: () => System.import("../../profile-app/profile-single-spa.js"),
  activeWhen: "/profile",
});

start();
