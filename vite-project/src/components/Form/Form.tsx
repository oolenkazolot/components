import React, { Component } from 'react';
import './Form.scss';
import { Input } from '../Input/Input';
import { Select } from '../Select/Select';
import { InputCheckbox } from '../../components/InputCheckbox/InputCheckbox';
import { RadioGroup } from '../RadioGroup/RadioGroup';
import { Button } from '../Button/Button';

const mainClass: string = 'form';
const countries: string[] = [
  'Poland',
  'England',
  'Germany',
  'France',
  'Belarus',
  'Lithuania',
  'Latvia',
];

export class Form extends Component {
  private stepInputText: React.RefObject<HTMLInputElement>;
  private stepInputDate: React.RefObject<HTMLInputElement>;
  private stepSelect: React.RefObject<HTMLSelectElement>;
  private stepInputCheckbox: React.RefObject<HTMLInputElement>;
  private stepRadioOne: React.RefObject<HTMLInputElement>;
  private stepRadioTwo: React.RefObject<HTMLInputElement>;
  private stepInputFile: React.RefObject<HTMLInputElement>;
  constructor(props: Component) {
    super(props);
    this.stepInputText = React.createRef();
    this.stepInputDate = React.createRef();
    this.stepSelect = React.createRef();
    this.stepInputCheckbox = React.createRef();
    this.stepRadioOne = React.createRef();
    this.stepRadioTwo = React.createRef();
    this.stepInputFile = React.createRef();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event: React.SyntheticEvent<EventTarget>): void {
    console.log(
      this.stepInputText.current?.value,
      this.stepInputDate.current?.value,
      this.stepSelect.current?.value,
      this.stepInputCheckbox.current?.checked,
      this.stepRadioOne.current?.checked,
      this.stepRadioTwo.current?.checked,
      this.stepInputFile.current?.value
    );

    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className={mainClass}>
        <h2 className={`${mainClass}__title`}>User Info</h2>
        <Input
          content="Name:"
          refInput={this.stepInputText}
          attributes={{
            type: 'text',
            name: 'name',
            placeholder: 'Enter Name...',
            required: true,
          }}
        />
        <Input
          content="Birthday:"
          refInput={this.stepInputDate}
          attributes={{
            type: 'date',
            name: 'date',
            required: true,
          }}
        />
        <Select
          countries={countries}
          refSelect={this.stepSelect}
          name="countries"
          content="Country:"
        />
        <InputCheckbox
          content="I agree with my personal data"
          refInput={this.stepInputCheckbox}
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
          refInput={[this.stepRadioOne, this.stepRadioTwo]}
          values={['add-notifications', 'not-notifications']}
          attributes={{
            name: 'notifications',
          }}
        />
        <Input
          content="Upload a profile picture"
          refInput={this.stepInputFile}
          attributes={{
            type: 'file',
            name: 'profile-picture',
            accept: 'image/*,image/jpeg',
          }}
        />
        <div className={`${mainClass}__btn`}>
          <Button
            content="Submit"
            attributes={{
              type: 'submit',
            }}
          />
        </div>
      </form>
    );
  }
}
