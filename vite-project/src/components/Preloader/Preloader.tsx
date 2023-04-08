import './Preloader.scss';
const mainClass = 'preloader';
import preloaderImg from '/preloader-image.png';

export const Preloader: () => JSX.Element = () => {
  return (
    <section className={mainClass}>
      <img className={`${mainClass}__img`} src={preloaderImg} alt="preloader-img" />
      <div className={`${mainClass}__wrap`}>
        <span className={`${mainClass}__item`}></span>
        <span className={`${mainClass}__item`}></span>
        <span className={`${mainClass}__item`}></span>
        <span className={`${mainClass}__item`}></span>
      </div>
    </section>
  );
};
