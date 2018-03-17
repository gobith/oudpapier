import Algemeen from './components/Algemeen.vue';
import Inschrijven from './components/Inschrijven.vue';
import Rooster from './components/Rooster.vue';
import Admin from './components/admin/Admin.vue';
import Gebruikers from './components/admin/Gebruikers.vue';
import DagDelen from './components/admin/DagDelen.vue';
import AdminRooster from './components/admin/AdminRooster.vue';
import Log from './components/admin/Log.vue';
import Inloggen from './components/Inloggen.vue';
import { store } from './store/store';



export const routes = [
    {
      path: '/inloggen',
      name: 'inloggen',
      component: Inloggen,
      beforeEnter (to , from , next) {
          if (store.getters.notLoggedin) {
            next()
          } else {
            next('/algemeen')
          }
        }
    },
    {
      path: '/algemeen',
      name: 'algemeen',
      component: Algemeen,
      beforeEnter (to , from , next) {
          if (store.getters.isLoggedin) {
            next()
          } else {
            next('/inloggen')
          }
        }
    },
    {
      path: '/inschrijven',
      name: 'inschrijven',
      component: Inschrijven,
      beforeEnter (to , from , next) {
          if (store.getters.isLoggedin) {
            next()
          } else {
            next('/inloggen')
          }
        }
    },
    {
    path: '/rooster',
    name: 'rooster',
    component: Rooster,
    beforeEnter (to , from , next) {
        if (store.getters.isLoggedin) {
          next()
        } else {
          next('/inloggen')
        }
      }
    },
    {
    path: '/admin',
    name: 'admin',
    component: Admin,
    beforeEnter (to , from , next) {
        if (store.getters.isAdmin) {
          next()
        } else {
          next('/inloggen')
        }
      },
    children: [
      {path: 'gebruikers', component: Gebruikers , name: 'gebruikers'} ,
      {path: 'dagdelen', component: DagDelen , name: 'dagdelen'} ,
      {path: 'rooster', component: AdminRooster , name: 'adminrooster'} ,
      {path: 'log', component: Log , name: 'log'}
    ]
    }

];
