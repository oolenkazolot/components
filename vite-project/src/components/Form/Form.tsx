import { useState } from 'react';
import { useForm } from 'react-hook-form';
import './Form.scss';
import { Input } from '../Input/Input';
import { Select } from '../Select/Select';
import { InputCheckbox } from '../../components/InputCheckbox/InputCheckbox';
import { RadioGroup } from '../RadioGroup/RadioGroup';
import { Button } from '../Button/Button';
import { CardForm } from '../CardForm/CardForm';
import { Message } from '../Message/Message';
import { IFormValue, ICardForm } from '../../models';
import { countries } from '../../utils/countries-data';
import { isValidationName, isValidationDate } from '../../utils/validation';
const mainClass = 'form';

export const Form: () => JSX.Element = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormValue>();

  const [formSent, setFormSent] = useState<boolean>(false);
  const [userInfos, setUserInfos] = useState<ICardForm[]>([]);

  const onSubmit = (data: IFormValue) => {
    const file: string = URL.createObjectURL(data.inputFile[0]);
    const item: ICardForm = { ...data, image: file };
    setUserInfos([...userInfos, item]);
    setFormSent(true);
    reset();
  };

  console.log(errors);

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        onClick={() => setFormSent(false)}
        className={mainClass}
      >
        <h2 className={`${mainClass}__title`}>User Info</h2>
        <Input
          content="First and last names:"
          register={register('inputText', {
            required: 'field is required',
            validate: {
              names: isValidationName,
            },
          })}
          attributes={{
            type: 'text',
            placeholder: 'Enter Name...',
          }}
          error={errors.inputText}
        />
        <Input
          content="Birthday:"
          register={register('inputDate', {
            required: 'field is required',
            validate: {
              date: isValidationDate,
            },
          })}
          attributes={{
            type: 'date',
          }}
          error={errors.inputDate}
        />
        <Select
          options={countries}
          defaultOption="Choose the country"
          register={register('select', { required: 'field is required' })}
          content="Country:"
          error={errors.select}
        />
        <InputCheckbox
          content="I agree with my personal data"
          register={register('inputCheckbox', { required: 'field is required' })}
          attributes={{
            value: 'personal-data',
          }}
          error={errors.inputCheckbox}
        ></InputCheckbox>
        <RadioGroup
          content={[
            'I want to receive notifications about promo, sales, etc.',
            'I don’t want to receive notifications about promo, sales, etc.',
          ]}
          register={register('radioGroup', { required: 'field is required' })}
          values={['add-notifications', 'not-notifications']}
          error={errors.radioGroup}
        />
        <Input
          content="Upload a profile picture"
          register={register('inputFile', { required: 'field is required' })}
          attributes={{
            type: 'file',
            accept: 'image/*,image/jpeg',
          }}
          error={errors.inputFile}
        />
        {formSent && <Message message="Personal data saved" error={false} />}
        <div className={`${mainClass}__btn`}>
          <Button
            content="Submit"
            attributes={{
              type: 'submit',
              value: 'submit',
            }}
          />
        </div>
      </form>
      <div className={`${mainClass}__cards`}>
        {userInfos.map((userInfo: ICardForm, index) => {
          return <CardForm key={index} {...userInfo} />;
        })}
      </div>
    </>
  );
};
