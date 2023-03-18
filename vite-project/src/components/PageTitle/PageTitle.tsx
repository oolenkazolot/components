import './PageTitle.scss';
const mainClass = 'page-title';
import { IPageTitle } from '../../models';

export const PageTitle: (props: IPageTitle) => JSX.Element = ({ title }: IPageTitle) => {
  return <h1 className={mainClass}>{title}</h1>;
};
