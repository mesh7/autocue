import { createMemoryHistory, createRouter } from "vue-router";

import LandingPage from "../views/landing-page/LandingPage.vue";
import ScrollerPage from "../views/scroller-page/ScrollerPage.vue";

const routes = [
  { path: "/", name: "LandingPage", component: LandingPage },
  { path: "/scroller-page",  name: "ScrollerPage", component: ScrollerPage },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;