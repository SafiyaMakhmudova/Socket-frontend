import { ADMIN } from "../../constants/layouts";

import {RT_ADMIN,MT_ADMIN } from '../../constants/routes/admin';  

import Admin from '../../views/Admin.vue'

export default [
    {
        path: '/list',
        name: RT_ADMIN,
        component: Admin,
        meta: {
            layout: ADMIN,
            title: MT_ADMIN
        }
    }
]