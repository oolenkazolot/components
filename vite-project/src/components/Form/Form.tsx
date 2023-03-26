import React, { Component } from 'react';
import './Form.scss';
import { Input } from '../Input/Input';
import { Select } from '../Select/Select';
import { InputCheckbox } from '../../components/InputCheckbox/InputCheckbox';
import { RadioGroup } from '../RadioGroup/RadioGroup';
import { Button } from '../Button/Button';
import { CardForm } from '../CardForm/CardForm';
import { Message } from '../Message/Message';
import { ICardFormValues, IStateForm, IValidateForm } from '../../models';
import { countries } from '../../utils/countries-data';
import { isValidationName, isValidationDate } from '../../utils/validation';
const mainClass: string = 'form';

export class Form extends Component {
  private inputTextRef: React.RefObject<HTMLInputElement>;
  private inputDateRef: React.RefObject<HTMLInputElement>;
  private selectRef: React.RefObject<HTMLSelectElement>;
  private inputCheckboxRef: React.RefObject<HTMLInputElement>;
  private radioOneRef: React.RefObject<HTMLInputElement>;
  private radioTwoRef: React.RefObject<HTMLInputElement>;
  private inputFileRef: React.RefObject<HTMLInputElement>;
  private formRef: React.RefObject<HTMLFormElement>;
  public state: IStateForm;

  constructor(props: Component) {
    super(props);
    this.inputTextRef = React.createRef();
    this.inputDateRef = React.createRef();
    this.selectRef = React.createRef();
    this.inputCheckboxRef = React.createRef();
    this.radioOneRef = React.createRef();
    this.radioTwoRef = React.createRef();
    this.inputFileRef = React.createRef();
    this.formRef = React.createRef();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      userInfos: [],
      isSave: false,
      dataValidateFields: {},
    };
  }

  private handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();

    if (this.createStateValidate()) {
      this.updateValuesForm();
    }
  }

  private isValidateForm(dataValidate: IValidateForm): boolean {
    for (let key in dataValidate) {
      if (!dataValidate[key as keyof IValidateForm]) {
        return false;
      }
    }

    return true;
  }

  private updateValuesForm(): void {
    this.setState(() => {
      const file: 0 | undefined | File =
        this.inputFileRef.current?.files?.length && this.inputFileRef.current?.files[0];

      const valuesForm: ICardFormValues = {
        name: this.inputTextRef.current?.value,
        date: this.inputDateRef.current?.value,
        addNotifications: this.radioOneRef.current?.checked,
        notNotifications: this.radioTwoRef.current?.checked,
        dataPersonal: this.inputCheckboxRef.current?.checked,
        country: this.selectRef.current?.value,
        picture: file && URL.createObjectURL(file),
      };
      this.clearRefsValues();

      return { userInfos: [...this.state.userInfos, valuesForm], isSave: true };
    });
  }

  private handleClick(): void {
    this.setState(() => {
      return { isSave: false };
    });
  }

  private clearRefsValues(): void {
    this.formRef.current?.reset();
  }

  private createStateValidate(): boolean {
    let dataValidate: IValidateForm = {};

    dataValidate.inputText = isValidationName(this.inputTextRef.current?.value);
    dataValidate.inputDate = isValidationDate(this.inputDateRef.current?.value);
    dataValidate.inputRadio =
      this.radioOneRef.current?.checked || this.radioTwoRef.current?.checked;
    dataValidate.inputCheckbox = this.inputCheckboxRef.current?.checked;
    dataValidate.inputFile = !!this.inputFileRef.current?.value;
    dataValidate.select = !!(
      this.selectRef.current?.value && this.selectRef.current?.value !== 'Choose the country'
    );
    console.log(dataValidate);

    this.setState(() => {
      return { dataValidateFields: dataValidate };
    });

    return this.isValidateForm(dataValidate);
  }

  render() {
    return (
      <>
        <form
          ref={this.formRef}
          onSubmit={this.handleSubmit}
          onClick={this.handleClick}
          className={mainClass}
        >
          <h2 className={`${mainClass}__title`}>User Info</h2>
          <Input
            content="Name:"
            refInput={this.inputTextRef}
            attributes={{
              type: 'text',
              name: 'name',
              placeholder: 'Enter Name...',
            }}
            isError={true}
            errorMessage={
              this.state.dataValidateFields.inputText === false
                ? 'Name is invalid (example: Oliver Peters)'
                : ''
            }
          />
          <Input
            content="Birthday:"
            refInput={this.inputDateRef}
            attributes={{
              type: 'date',
              name: 'date',
            }}
            isError={true}
            errorMessage={
              this.state.dataValidateFields.inputDate === false
                ? 'date is invalid (date must not be greater than today"s date) '
                : ''
            }
          />
          <Select
            options={countries}
            defaultOption="Choose the country"
            refSelect={this.selectRef}
            name="countries"
            content="Country:"
            isError={true}
            errorMessage={this.state.dataValidateFields.select === false ? 'Specify country' : ''}
          />
          <InputCheckbox
            content="I agree with my personal data"
            refInput={this.inputCheckboxRef}
            attributes={{
              name: 'personal-data',
              value: 'personal-data',
            }}
            isError={true}
            errorMessage={
              this.state.dataValidateFields.inputCheckbox === false
                ? 'Confirm the accuracy of personal data'
                : ''
            }
          ></InputCheckbox>
          <RadioGroup
            content={[
              'I want to receive notifications about promo, sales, etc.',
              'I don’t want to receive notifications about promo, sales, etc.',
            ]}
            refInput={[this.radioOneRef, this.radioTwoRef]}
            values={['add-notifications', 'not-notifications']}
            attributes={{
              name: 'notifications',
            }}
            isError={true}
            errorMessage={
              this.state.dataValidateFields.inputRadio === false
                ? 'Specify whether you want to receive notifications about promotions, sales, etc.'
                : ''
            }
          />
          <Input
            content="Upload a profile picture"
            refInput={this.inputFileRef}
            attributes={{
              type: 'file',
              name: 'profile-picture',
              accept: 'image/*,image/jpeg',
            }}
            isError={true}
            errorMessage={
              this.state.dataValidateFields.inputFile === false
                ? 'Profile picture not selected'
                : ''
            }
          />
          {this.state.isSave && <Message message="Personal data saved" isError={false} />}
          <div className={`${mainClass}__btn`}>
            <Button
              content="Submit"
              attributes={{
                type: 'submit',
              }}
            />
          </div>
        </form>
        <div className={`${mainClass}__cards`}>
          {this.state.userInfos.map((userInfo, index) => {
            return <CardForm key={index} {...userInfo} />;
          })}
        </div>
      </>
    );
  }
}
