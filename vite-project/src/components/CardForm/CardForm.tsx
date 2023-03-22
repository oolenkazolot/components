import './CardForm.scss';

type TCardFormValues = {
  name?: string;
  date?: string;
  addNotifications?: boolean;
  notNotifications?: boolean;
  dataPersonal?: boolean;
  country?: string;
  picture?: string;
};

export const CardForm: (props: TCardFormValues) => JSX.Element = ({
  name,
  date,
  addNotifications,
  notNotifications,
  dataPersonal,
  country,
  picture,
}: TCardFormValues) => {
  const mainClass = 'card-form';
  return (
    <div className={mainClass}>
      <div>{name}</div>
      <div>{date}</div>
      <div>{addNotifications}</div>
      <div>{notNotifications}</div>
      <div>{dataPersonal}</div>
      <div>{country}</div>
      <div>{picture}</div>
    </div>
  );
};
