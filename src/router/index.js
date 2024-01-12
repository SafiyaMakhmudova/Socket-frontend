import { createRouter, createWebHistory } from 'vue-router';
import { layoutMiddleware } from './middlewares';
import AuthRoutes from './routes/auth';
import decodeJwt from './../function/tokenParser';
import { AUTH } from '../constants/layouts';
import { RT_LOGIN } from '../constants/routes/auth';

const routes = [
  ...AuthRoutes,
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('../views/NotFound.vue'),
    meta: {
      requiresAuth: true,
      title: 'Not-Found'
    }
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem("token");
  const parsedToken = decodeJwt(token);
  const isTokenExpired = parsedToken.exp < Date.now() / 1000;

  if (to.name !== RT_LOGIN && isTokenExpired && to.meta.requiresAuth) {
    next({ name: RT_LOGIN });
  } else if (token && to.name === RT_LOGIN) {
    if (!from.name) {
      next({ name: 'not-found' });
    } else {
      next({ name: from.name });
    }
  } else {
    next();
  }
});

router.beforeResolve(async (to) => {
  await layoutMiddleware(to);
  updateMeta(to?.meta?.title);
});

function updateMeta(title) {
  document.title = title;
}

export { updateMeta };
export default router;
