import { Route, Routes } from 'react-router-dom'
import { AppLayout } from '@src/layouts/AppLayout';
import { Home } from '@src/pages/home/Home';
import { QueryToUrl } from '@src/pages/queryToUrl/QueryToUrl';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />} >
        <Route index element={<Home />} />
        <Route path="*" element={<QueryToUrl />} />
      </Route>
    </Routes>
  );
}
