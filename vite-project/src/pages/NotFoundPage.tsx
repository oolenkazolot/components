import { PageTitle } from '../components/PageTitle/PageTitle';
import './NotFoundPage.scss';
import { Link } from 'react-router-dom';
const mainClass: string = 'main';
import { Header } from '../components/Header/Header';

export const NotFoundPage: Function = () => {
  return (
    <>
      <Header title="NotFoundPage" />
      <main className={mainClass}>
        <PageTitle title="NotFoundPage" />
        <p>
          This page doesn't exist. Go <Link to="/">Home Page</Link>
        </p>
      </main>
    </>
  );
};
