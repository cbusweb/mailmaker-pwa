import BugReportIcon from '@mui/icons-material/BugReport';
import GitHubIcon from '@mui/icons-material/GitHub';
import HomeIcon from '@mui/icons-material/Home';

import asyncComponentLoader from '@/utils/loader';

import { Pages, Routes } from './types';

const routes: Routes = {
  [Pages.Callback]: {
    component: asyncComponentLoader(() => import('@/pages/Callback/Callback')),
    path: '/mailmaker-pwa/callback',
    title: 'Callback',
    icon: BugReportIcon,
  },
  [Pages.Login]: {
    component: asyncComponentLoader(() => import('@/pages/Login')),
    path: '/mailmaker-pwa/login',
    title: 'Login',
    icon: BugReportIcon,
  },
  [Pages.Welcome]: {
    component: asyncComponentLoader(() => import('@/pages/Welcome')),
    path: '/mailmaker-pwa',
    title: 'Welcome',
    icon: HomeIcon,
  },
  [Pages.Page1]: {
    component: asyncComponentLoader(() => import('@/pages/Page1')),
    path: '/mailmaker-pwa/page-1',
    title: 'Page 1',
    icon: GitHubIcon,
  },
  [Pages.WrikeLogin]: {
    component: asyncComponentLoader(() => import('@/pages/WrikeLogin')),
    path: '/mailmaker-pwa/wrike-login',
    title: 'Wrike Login',
    icon: BugReportIcon,
  },
  [Pages.NotFound]: {
    component: asyncComponentLoader(() => import('@/pages/NotFound')),
    path: '*',
  },
};

export default routes;
