import { PageTitle } from '../components/PageTitle/PageTitle';
import './NotFoundPage.scss';
import { Link } from 'react-router-dom';
const mainClass = 'not-found-page';

export const NotFoundPage: Function = () => {
  return (
    <div className={mainClass}>
      <PageTitle title="NotFoundPage" />
      <p>
        This page doesn't exist. Go <Link to="/">Home Page</Link>
      </p>
    </div>
  );
};
