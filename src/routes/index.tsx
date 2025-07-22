import { RouteObject } from "react-router";
import { Component } from "./Component";
import { Layout } from "./Layout";

const rootRouter: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Component />,
      },

    ],
  },

];

const router: RouteObject[] = [
  ...rootRouter,
];

export default router;
