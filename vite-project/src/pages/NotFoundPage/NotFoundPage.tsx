import { PageTitle } from '../../components/PageTitle/PageTitle';
import './NotFoundPage.scss';
import { Link } from 'react-router-dom';
const mainClass = 'main';
const className = 'not-found-page';

export const NotFoundPage: () => JSX.Element = () => {
  return (
    <>
      <main className={mainClass}>
        <section className={className}>
          <PageTitle title="Not Found Page" />
          <p className={`${className}__title`}>
            This page doesn&apos;t exist. Go <Link to="/">Home Page</Link>
          </p>
        </section>
      </main>
    </>
  );
};
