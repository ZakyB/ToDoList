
import HomePage from '../pages/home.f7';
import AboutPage from '../pages/about.f7';
import FormPage from '../pages/form.f7';


import DynamicRoutePage from '../pages/dynamic-route.f7';
import RequestAndLoad from '../pages/request-and-load.f7';
import NotFoundPage from '../pages/404.f7';

import SignIn from '../pages/SignIn.f7';
import SignUp from '../pages/SignUp.f7';
import List from '../pages/list.f7';
import ajouterList from '../pages/ajouterList.f7';
import ajouterTache from '../pages/ajouterTache.f7';
import modifList from '../pages/updateList.f7';
import modifTache from '../pages/updateTache.f7';
var routes = [
  {
    path: '/',
    component: SignIn,
  },
  {
    path: '/home',
    component: HomePage,
  },
  {
    path: '/about/',
    component: AboutPage,
  },
  {
    path: '/form/',
    component: FormPage,
  },
  {
    path: '/SignIn/',
    component: SignIn,
  },
  {
    path: '/SignUp/',
    component: SignUp,
  },
  {
    path: '/List/',
    component: List,
  },
  {
    path: '/ModifList/',
    component: modifList,
  },
  {
    path: '/ModifTache/',
    component: modifTache,
  },
  {
    path: '/ajouterList/',
    component: ajouterList,
  },
  {
    path: '/ajouterTache/',
    component: ajouterTache,
  },


  {
    path: '/dynamic-route/blog/:blogId/post/:postId/',
    component: DynamicRoutePage,
  },
  {
    path: '/request-and-load/user/:userId/',
    async: function ({ router, to, resolve }) {
      // App instance
      var app = router.app;

      // Show Preloader
      app.preloader.show();

      // User ID from request
      var userId = to.params.userId;

      // Simulate Ajax Request
      setTimeout(function () {
        // We got user data from request
        var user = {
          firstName: 'Vladimir',
          lastName: 'Kharlampidi',
          about: 'Hello, i am creator of Framework7! Hope you like it!',
          links: [
            {
              title: 'Framework7 Website',
              url: 'http://framework7.io',
            },
            {
              title: 'Framework7 Forum',
              url: 'http://forum.framework7.io',
            },
          ]
        };
        // Hide Preloader
        app.preloader.hide();

        // Resolve route to load page
        resolve(
          {
            component: RequestAndLoad,
          },
          {
            props: {
              user: user,
            }
          }
        );
      }, 1000);
    },
  },
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];

export default routes;
