import HomeComponent from '@/pages/Home/HomeComponent'
import FunnelComponent from '@/pages/Funnel/FunnelComponent'
import SettingsComponent from '@/pages/Settings/SettingsComponent'
import IntegrationsComponent from '@/pages/Integrations/IntegrationsComponent'

const routes = [
    { path: '/', name:'home', component: HomeComponent },
    { path: '/funil', name:'funnel', component: FunnelComponent },
    { path: '/configuracoes', name:'settings', component: SettingsComponent },
    { path: '/integracoes', name:'integrations', component: IntegrationsComponent },
  ]
  
  export default routes