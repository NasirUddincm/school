import {createRouter, createWebHistory} from 'vue-router';
export const routes = [ 
   /*=================================
       Frontend Route
    ===================================*/ 
    {
        path:'/',
        component: () => import('../views/frontend/index.vue'),
        meta: {title: 'Home'},

    },
    {
        path:'/product',
        component: () => import('../views/frontend/product.vue'),
        meta: {title: 'Home'},

    },

    /*=================================
       Admin Route
    ===================================*/ 
    {
        path: '/admin',
        component: () => import('../views/backend/DashboardView.vue'),
        meta: { backend: true },		
    },

   
    {
        path: '/admin/test',
        component: () => import('../views/backend/test.vue'),
        meta: { backend: true },
        
	
    },
    {
        path: '/admin/test-details',
        component: () => import('../views/backend/testDetail.vue'),
        meta: { backend: true },
        
	 
    },

]


const router = createRouter({
    history: createWebHistory(),
    routes, // short for `routes: routes`
})

/*==============================
    start for daynamic title
================================*/
router.beforeEach((toRoute, fromRoute, next) => {
    window.document.title = toRoute.meta && toRoute.meta.title ? toRoute.meta.title : 'Home';
    next();
});


/*==============================
    end for daynamic title
================================*/

export default router