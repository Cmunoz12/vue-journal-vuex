
export default{
    name: 'daybook',
    component: () => import(/* webpackChunkName: "about" */ '@/modules/daybook/layout/DayBookLayout'),
    children: [
        {
            path: '',
            name: 'no-entry',
            component: () => import(/* webpackChunkName: "about" */ '@/modules/daybook/views/NoEntrySelected.vue'),
        },
        {
            path: ':id',
            name: 'entry',
            component: () => import(/* webpackChunkName: "about" */ '@/modules/daybook/views/EntryView.vue'),
            props: (route) => {
                return {
                    id: route.params.id
                }
            }
        }
    ]
}