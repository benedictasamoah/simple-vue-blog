const routers = [
    {
        path: '/',
        meta: {
            title: 'Home'
        },
        component: (resolve) => require(['./views/home/index.vue'], resolve)
    }
];
export default routers;