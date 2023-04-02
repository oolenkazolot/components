import { PageTitle } from '../components/PageTitle/PageTitle';
import './NotFoundPage.scss';
import { Link } from 'react-router-dom';
const mainClass = 'main';

export const NotFoundPage: () => JSX.Element = () => {
  return (
    <>
      <main className={mainClass}>
        <PageTitle title="NotFoundPage" />
        <p>
          This page doesn&apos;t exist. Go <Link to="/">Home Page</Link>
        </p>
      </main>
    </>
  );
};
