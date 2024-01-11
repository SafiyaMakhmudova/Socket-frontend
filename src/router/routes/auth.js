import { AUTH } from "../../constants/layouts";

import {RT_LOGIN, MT_LOGIN } from '../../constants/routes/auth'; 

export default [
    {
        path: '/login',
        name: RT_LOGIN,
        component: ()=> import('../../views/Login.vue'),
        meta: {
            layout: AUTH,
            title: MT_LOGIN
        }
    }
]