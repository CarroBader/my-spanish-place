import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    // path: `/grand-prix/`,
    // name: `undefined`,
    // icon: `flag-checkered`,
    // component: UpcomingRace,
  },
  {
    // path: `/standings`,
    // name: `Standings`,
    // icon: `table`,
    // component: Standings,
    // children: [
    //   {
    //     path: `/driver-standings`,
    //     name: `Driver Standings`,
    //     component: DriverStandings,
    //   },
    //   {
    //     path: `/constructor-standings`,
    //     name: `Constructor Standings`,
    //     component: ConstructorStandings,
    //   },
    // ],
  },
]

const router = new VueRouter({
  mode: `history`,
  base: process.env.BASE_URL,
  routes,
})

export default router
