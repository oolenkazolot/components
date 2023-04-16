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

import {
  isValidationName,
  isValidationDate,
  isValidationSelect,
} from '../../utils/validation/validation';
import type { RootState } from '../../redux/store';
import { useSelector, useDispatch } from 'react-redux';
const mainClass = 'form';

export const Form: () => JSX.Element = () => {
  const stateUserInfos = useSelector((state: RootState) => state.userInfos);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormValue>({ reValidateMode: 'onSubmit' });

  const [formSent, setFormSent] = useState<boolean>(false);

  const onSubmit = async (data: IFormValue) => {
    const file: string = URL.createObjectURL(data.inputFile[0]);

    const item: ICardForm = { ...data, image: file };
    dispatch({ type: 'userInfos/add', payload: JSON.stringify(item) });

    setFormSent(true);
    reset();
  };

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
            required: 'Field is required',
            validate: {
              names: isValidationName,
            },
          })}
          attributes={{
            type: 'text',
            placeholder: 'Enter First and Last names...',
          }}
          error={errors.inputText}
        />
        <Input
          content="Birthday:"
          register={register('inputDate', {
            required: 'Field is required',
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
          register={register('select', {
            validate: {
              select: isValidationSelect,
            },
          })}
          content="Country:"
          error={errors.select}
        />
        <InputCheckbox
          content="I agree with my personal data"
          register={register('inputCheckbox', { required: 'Field is required' })}
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
          register={register('radioGroup', { required: 'Field is required' })}
          values={['add-notifications', 'not-notifications']}
          error={errors.radioGroup}
        />
        <Input
          content="Upload a profile picture"
          register={register('inputFile', { required: 'Field is required' })}
          attributes={{
            type: 'file',
            accept: 'image/*',
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
        {stateUserInfos.userInfos.map((userInfo: string, index) => {
          return <CardForm key={index} {...JSON.parse(userInfo)} />;
        })}
      </div>
    </>
  );
};
