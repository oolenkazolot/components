import { Routes, Route } from 'react-router-dom';

import { HomePage } from './pages/HomePage/HomePage';
import { AboutPage } from './pages/AboutPage/AboutPage';
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage';
import { FormPage } from './pages/FormPage/FormPage';

export const Router = () => {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/form" element={<FormPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
