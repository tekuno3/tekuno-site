import { Route, Routes } from 'react-router-dom'
import { AppLayout } from '@src/layouts/AppLayout';
import { Home } from '@src/pages/home/Home';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />} >
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  );
}
