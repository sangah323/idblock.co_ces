import { createBrowserRouter } from "react-router-dom";
import { Navigate } from 'react-router-dom';

import {
  HOME_ROUTES,
  ABOUT_ROUTES,
  DEVCENTER_ROUTES,
  CAREERS_ROUTES,
  DEVELOPER_ROUTES,
  BLOG_ROUTES,
  AUTH_ROUTES,
  NOTFOUND_ROUTES,
} from '@/utils/routes';

import RootLayout from '@/layout/RootLayout';
import Home from '@/pages/home/Home';

import About from '@/pages/about/About';

import DevCenter from '@/pages/dev/DevCenter';

import CareersLayout from '@/layout/CareersLayout';
import Careers from '@/pages/careers/Careers';
import CareersDetail from '@/pages/careers/CareersDetail';

import DevLayout from '@/layout/DevLayout';
import Developer from '@/pages/dev/Developer';
import DevDashboard from '@/pages/dev/DevDashboard';
import DevDashboardApi from '@/components/developer/devDashboard/DevDashboardApi';
import DevDashboardPayment from '@/components/developer/devDashboard/DevDashboardPayment';

import BlogLayout from '@/layout/BlogLayout';
import Blog from '@/pages/blog/Blog';
import BlogDetail from '@/pages/blog/BlogDetail';

import AuthLayout from '@/layout/AuthLayout';
import Login from '@/pages/auth/Login';
import Signup from '@/pages/auth/Signup';

import NotFound from '@/pages/NotFound';

const router = createBrowserRouter([
  {
    path: HOME_ROUTES.INDEX.PATH,
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: ABOUT_ROUTES.INDEX.PATH,
        element: <About />,
      },
      {
        path: DEVCENTER_ROUTES.INDEX.PATH,
        element: <DevCenter />,
      },
      {
        path: CAREERS_ROUTES.ROOT.PATH,
        element: <CareersLayout />,
        children: [
          {
            index: true,
            element: <Careers />,
          },
          {
            path: CAREERS_ROUTES.DETAIL.PATH(),
            element: <CareersDetail />,
          },
        ],
      },
      {
        path: BLOG_ROUTES.ROOT.PATH,
        element: <BlogLayout />,
        children: [
          {
            index: true,
            element: <Blog />,
          },
          {
            path: BLOG_ROUTES.DETAIL.PATH(),
            element: <BlogDetail />,
          },
        ],
      },
    ],
  },
  {
    path: DEVELOPER_ROUTES.ROOT.PATH,
    element: <DevLayout />,
    children: [
      {
        index: true,
        element: <Developer />,
      },
      {
        path: DEVELOPER_ROUTES.DASHBOARD.PATH,
        element: <DevDashboard />,
        children: [
          {
            path: DEVELOPER_ROUTES.DASHBOARD_API.PATH,
            element: <DevDashboardApi />,
          },
          {
            path: DEVELOPER_ROUTES.DASHBOARD_PAYMENT.PATH,
            element: <DevDashboardPayment />,
          },
        ],
      },
    ],
  },
  {
    path: AUTH_ROUTES.ROOT.PATH,
    element: <AuthLayout />,
    children: [
      {
        path: AUTH_ROUTES.LOGIN.PATH,
        element: <Login />,
      },
      {
        path: AUTH_ROUTES.SIGNUP.PATH,
        element: <Signup />,
      },
    ],
  },
  {
    path: NOTFOUND_ROUTES.ROOT.PATH,
    element: <NotFound />,
  },
  {
    path: "/index.co",
    element: <Navigate to={HOME_ROUTES.INDEX.PATH} replace />,
  },
  {
    path: "*",
    element: <Navigate to={NOTFOUND_ROUTES.ROOT.PATH} replace />,
  },
]);

export default router;