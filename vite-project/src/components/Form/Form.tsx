import React, { Component } from 'react';
import './Form.scss';
import { Input } from '../Input/Input';
import { Select } from '../Select/Select';
import { InputCheckbox } from '../../components/InputCheckbox/InputCheckbox';
import { RadioGroup } from '../RadioGroup/RadioGroup';
import { Button } from '../Button/Button';
import { CardForm } from '../CardForm/CardForm';
import { Message } from '../Message/Message';
import { ICardFormValues, IStateForm } from '../../models';
import { countries } from '../../utils/countries-data';
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
    };
  }

  private handleSubmit(event: React.SyntheticEvent<EventTarget>): void {
    event.preventDefault();
    this.updateValuesForm();
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
              required: true,
            }}
          />
          <Input
            content="Birthday:"
            refInput={this.inputDateRef}
            attributes={{
              type: 'date',
              name: 'date',
              required: true,
            }}
          />
          <Select
            countries={countries}
            refSelect={this.selectRef}
            name="countries"
            content="Country:"
          />
          <InputCheckbox
            content="I agree with my personal data"
            refInput={this.inputCheckboxRef}
            attributes={{
              name: 'personal-data',
              value: 'personal-data',
            }}
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
          />
          <Input
            content="Upload a profile picture"
            refInput={this.inputFileRef}
            attributes={{
              type: 'file',
              name: 'profile-picture',
              accept: 'image/*,image/jpeg',
            }}
          />
          {this.state.isSave && <Message message="Personal data saved" />}
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
