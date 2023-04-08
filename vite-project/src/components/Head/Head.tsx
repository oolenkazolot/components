import './Head.scss';
import headImg from '/head.jpg';
const mainClass = 'head';

export const Head: () => JSX.Element = () => {
  return (
    <div className={mainClass}>
      <img className={`${mainClass}__img`} src={headImg} alt="head-img" />
    </div>
  );
};
