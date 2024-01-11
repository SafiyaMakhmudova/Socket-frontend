import { createRouter, createWebHistory } from 'vue-router';
import { layoutMiddleware } from './middlewares';

import AuthRoutes from './routes/auth';

import { AUTH } from '../constants/layouts';
// import { RT_LOGIN } from '../constants/routes/auth';

const routes = [
  ...AuthRoutes,
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('../views/NotFound.vue'),
    meta: {
      layout: AUTH,
      title: 'Not-Found'
    }
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

// router.beforeEach((to, from, next) => {
//   const token = localStorage.getItem('access_token');
//   if (to.name !== RT_LOGIN && !token) {
//     next({ name: RT_LOGIN });
//   } else if (token && to.name === RT_LOGIN) {
//     if (!from.name) {
//       next({ name: 'not-found' });
//     } else {
//       next({ name: from.name });
//     }
//   } else {
//     next();
//   }
// });

router.beforeResolve(async (to) => {
  await layoutMiddleware(to);
  updateMeta(to?.meta?.title);
});

function updateMeta(title:any) {
  document.title = title;
}

// export { updateMeta };
export default router;
