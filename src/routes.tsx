import { index, type RouteConfig } from '@react-router/dev/routes';

const routes = [
  index('./routes/Home.tsx'),
] satisfies RouteConfig;

export default routes;
