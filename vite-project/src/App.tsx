import { Routes, Route } from 'react-router-dom';
import './App.scss';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { FormPage } from './pages/FormPage';
import { Header } from './components/Header/Header';
import { Head } from './components/Head/Head';

function App() {
  return (
    <>
      <Head />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/form" element={<FormPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
