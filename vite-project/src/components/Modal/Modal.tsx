import './Modal.scss';
import { IModal } from '../../models';

const mainClass = 'modal';

export const Modal: (props: IModal) => JSX.Element = ({
  children,
  onCloseModal,
  classNameIcon,
  isOpen,
}: IModal) => {
  const className: string = isOpen ? `${mainClass} open` : mainClass;

  return (
    <div className={className}>
      <div className={`${mainClass}__backdrop`} onClick={onCloseModal}></div>
      <div className={`${mainClass}__inner`}>
        <button className={`${mainClass}__btn`} onClick={onCloseModal}>
          <i className={`${mainClass}__icon ${classNameIcon}`}></i>
        </button>
        {children}
      </div>
    </div>
  );
};
