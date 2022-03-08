import { RouteRecordRaw } from 'vue-router';

import RouteNames from './routeNames';

import { MainLayout } from '@/layouts/MainLayout';
import { HomePage } from '@/views/HomePage/';
import { LoginPage } from '@/views/LoginPage';
import { RegistrationPage } from '@/views/RegistrationPage';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: MainLayout,
    children: [
      {
        name: RouteNames.HomePage,
        path: '',
        component: HomePage,
      },
      {
        name: RouteNames.LoginPage,
        path: '/login',
        component: LoginPage,
      },
      {
        name: RouteNames.RegistrationPage,
        path: '/registration',
        component: RegistrationPage,
      },
    ],
  },
];

export default routes;
