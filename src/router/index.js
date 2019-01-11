import Vue from 'vue'
import Router from 'vue-router'
import MintUI from 'mint-ui'
import { Area } from 'vant';
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant)
Vue.use(Area)
Vue.use(Router)
Vue.use(MintUI)

const routes = [
  {
    path: '/',
    redirect: '/loginp'
  },
  {
    path: '/login',
    name: 'login',
    components: {
      default: () => import('@/components/Login')
    }
  },
  {
    path: '/loginp',
    name: 'loginp',
    components: {
      default: () => import('@/components/Loginp')
    }
  },
  {
    path: '/register',
    name: 'register',
    components: {
      default: () => import('@/components/Register')
    }
  },
   {
    path: '/register0',
    name: 'register0',
    components: {
      default: () => import('@/components/Register0')
    }
  }, 
  {
    path: '/detail/:id',
    name: 'detail',
    alias: '/h',
    components: {
      default: () => import('@/components/Detail')
    },
    props: {
      default: true
    }
  },
  {
    path: '/companyDetail',
    name: 'companyDetail',
    components: {
      default: () => import('@/components/home/kanCompany/CompanyDetail')
    }
  },
  {
    path: '/findGoodCompany',
    name: 'findGoodCompany',
    components: {
      default: () => import('@/components/home/FindGoodCompany')
    }
  },
  {
    path: '/rankingList',
    name: 'rankingList',
    components: {
      default: () => import('@/components/home/RankingList')
    }
  },
  {
    path: '/kanCompany',
    name: 'kanCompany',
    components: {
      default: () => import('@/components/home/kanCompany/KanCompany')
    }
  },
  {
    path: '/kanCompanyArea',
    name: 'kanCompanyArea',
    components: {
      default: () => import('@/components/home/kanCompany/KanCompanyArea')
    }
  },
  {
    path: '/kanCompanySearch',
    name: 'kanCompanySearch',
    components: {
      default: () => import('@/components/home/kanCompany/KanCompanySearch')
    }
  },
  {
    path: '/kanCompanyScale',
    name: 'kanCompanyScale',
    components: {
      default: () => import('@/components/home/kanCompany/KanCompanyScale')
    }
  },
  {
    path: '/kanCompanyColligate',
    name: 'kanCompanyColligate',
    components: {
      default: () => import('@/components/home/kanCompany/KanCompanyColligate')
    }
  },
  {
    path: '/kanCompanyIndustry',
    name: 'kanCompanyIndustry',
    components: {
      default: () => import('@/components/home/kanCompany/KanCompanyIndustry')
    }
  },
  {
    path: '/connect',
    name: 'connect',
    components: {
      default: () => import('@/components/home/renMai/Connect')
    }
  },
  {
    path: '/interview',
    name: 'interview',
    components: {
      default: () => import('@/components/home/interview/Interview')
    }
  },
  {
    path: '/resumeUpgrading',
    name: 'resumeUpgrading',
    components: {
      default: () => import('@/components/home/interview/ResumeUpgrading')
    }
  },
  {
    path: '/trueQuestion',
    name: 'trueQuestion',
    components: {
      default: () => import('@/components/home/interview/TrueQuestion')
    }
  },
  {
    path: '/articleDetails',
    name: 'articleDetails',
    components: {
      default: () => import('@/components/home/interview/ArticleDetails')
    }
  },
  {
    path: '/askAnswer',
    name: 'askAnswer',
    components: {
      default: () => import('@/components/home/askAnswer/AskAnswer')
    }
  },
  {
    path: '/askAnswerChoice',
    name: 'askAnswerChoice',
    components: {
      default: () => import('@/components/home/askAnswer/AskAnswerChoice')
    }
  },
  {
    path: '/writeAnswers',
    name: 'writeAnswers',
    components: {
      default: () => import('@/components/home/askAnswer/WriteAnswers')
    }
  },
  {
    path: '/home',
    name: 'home',
    components: {
      default: () => import('@/components/home/Home'),
      footer: () => import('@/components/Footer')
    }
  },
  {
    path: '/bird',
    name: 'bird',
    components: {
      default: () => import('@/components/bird/Bird'),
      footer: () => import('@/components/Footer')
    }
  },
  {
    path: '/birdHelp',
    name: 'birdHelp',
    components: {
      default: () => import('@/components/bird/BirdHelp')
    }
  },
  {
    path: '/moreBird',
    name: 'moreBird',
    components: {
      default: () => import('@/components/bird/MoreBird')
    }
  },
  {
    path: '/msg',
    name: 'msg',
    components: {
      default: () => import('@/components/msg/Msg'),
      footer: () => import('@/components/Footer')
    }
  },
  {
    path: '/maillist',
    name: 'maillist',
    components: {
      default: () => import('@/components/msg/Maillist')
    }
  },
  {
    path: '/todolist',
    name: 'todolist',
    components: {
      default: () => import('@/components/msg/Todolist')
    }
  },
  {
    path: '/antidisturbancedettings',
    name: 'antidisturbancedettings',
    components: {
      default: () => import('@/components/msg/AntiDisturbanceSettings')
    }
  },
  {
    path: '/futureassistant',
    name: 'futureassistant',
    components: {
      default: () => import('@/components/msg/FutureAssistant')
    }
  },
  {
    path: '/chatsetting',
    name: 'chatsetting',
    components: {
      default: () => import('@/components/msg/Chatsetting')
    }
  },
  {
    path: '/me',
    name: 'me',
    components: {
      default: () => import('@/components/me/Me'),
      footer: () => import('@/components/Footer')
    }
  },
  {
    path: '/attention',
    name: 'attention',
    components: {
      default: () => import('@/components/me/Attention')
    }
  },
  {
    path: '/autocomplete1',
    name: 'sutocomplete1',
    components: {
      default: () => import('@/components/me/Autocomplete1')
    }
  },
  {
    path: '/autocomplete3',
    name: 'Autocomplete3',
    components: {
      default: () => import('@/components/me/Autocomplete3')
    }
  },
  {
    path: '/update0',
    name: 'update0',
    components: {
      default: () => import('@/components/me/update/update0')
    }
  },
  {
    path: '/update1',
    name: 'update1',
    components: {
      default: () => import('@/components/me/update/update1')
    }
  },
  {
    path: '/update2',
    name: 'update2',
    components: {
      default: () => import('@/components/me/update/update2')
    }
  },
  {
    path: '/update3',
    name: 'update3',
    components: {
      default: () => import('@/components/me/update/update3')
    }
  },
  {
    path: '/update4',
    name: 'update4',
    components: {
      default: () => import('@/components/me/update/update4')
    }
  },
  {
    path: '/update5',
    name: 'update5',
    components: {
      default: () => import('@/components/me/update/update5')
    }
  },
  {
    path: '/update6',
    name: 'update6',
    components: {
      default: () => import('@/components/me/update/update6')
    }
  },
  {
    path: '/update7',
    name: 'update7',
    components: {
      default: () => import('@/components/me/update/update7')
    }
  },
  {
    path: '/update8',
    name: 'update8',
    components: {
      default: () => import('@/components/me/update/update8')
    }
  },
  {
    path: '/update9',
    name: 'update9',
    components: {
      default: () => import('@/components/me/update/update9')
    }
  },
  {
    path: '/setting',
    name: 'setting',
    components: {
      default: () => import('@/components/me/Setting')
    }
  },
  {
    path: '/netpolice',
    name: 'netpolice',
    components: {
      default: () => import('@/components/me/Netpolice')
    }
  },
  {
    path: '/netdetail',
    name: 'netdetail',
    components: {
      default: () => import('@/components/me/netdetail')
    }
  }
]

const router = new Router({
  routes: routes
})

export default router
