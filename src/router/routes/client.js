import { CLIENT } from "../../constants/layouts";

import {RT_HOME, MT_HOME } from '../../constants/routes/client'; 

export default [
    {
        path: '/home',
        name: RT_HOME,
        component: ()=> import('../../views/Home.vue'),
        meta: {
            requiresAuth: true,
            layout: CLIENT,
            title: MT_HOME
        }
    }
]