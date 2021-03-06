import HomeComponent from '@/pages/Home/HomeComponent'

import FunnelComponent from '@/pages/Funnel/FunnelComponent'
import FunnelIdComponent from '@/pages/Funnel/views/FunnelIdComponent'
import RecentUpdadeIdComponent from '@/pages/Funnel/views/RecentUpdadeIdComponent'

import PagesComponent from '@/pages/Pages/PagesComponent'
import IntegrationsComponent from '@/pages/Integrations/IntegrationsComponent'

const routes = [
    { path: '/', name:'home', component: HomeComponent },

    { path: '/funil', name:'funnel', component: FunnelComponent },
    { path: '/funil/:id', name:'funnelId', component: FunnelIdComponent, props: true },
    { path: '/funil/atualizacao/:id', name:'recentId', component: RecentUpdadeIdComponent, props: true },

    { path: '/paginas', name:'pages', component: PagesComponent },
    { path: '/integracoes', name:'integrations', component: IntegrationsComponent },
  ]
  
  export default routes