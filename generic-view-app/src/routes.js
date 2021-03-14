import React from 'react';
const Home = React.lazy(() => import('./components/Home'));
// const Manager = React.lazy(() => import('./components/ResourceManager/Manager'));

const routes = [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  // {
  //   path: '/manager/:resource',
  //   exact: true,
  //   component: Manager,
  // },
  // {
  //   path: '/manager',
  //   exact: true,
  //   component: Manager,
  // }
];

export default routes;
