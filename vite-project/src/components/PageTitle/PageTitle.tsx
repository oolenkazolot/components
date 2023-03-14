import './PageTitle.scss';
const mainClass: string = 'page-title';

interface IPageTitle {
  title: string;
}

export const PageTitle: Function = ({ title }: IPageTitle) => {
  return <h1 className={mainClass}>{title}</h1>;
};
