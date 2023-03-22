import React, { Component } from 'react';
import { Input } from '../Input/Input';
import { Select } from '../Select/Select';
import { InputCheckbox } from '../../components/InputCheckbox/InputCheckbox';
import './Form.scss';
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
  constructor(props: Component) {
    super(props);
    this.stepInputText = React.createRef();
    this.stepInputDate = React.createRef();
    this.stepSelect = React.createRef();
    this.stepInputCheckbox = React.createRef();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event: React.SyntheticEvent<EventTarget>): void {
    console.log(
      this.stepInputText.current?.value,
      this.stepInputDate.current?.value,
      this.stepSelect.current?.value,
      this.stepInputCheckbox.current?.value
    );

    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className={mainClass}>
        <Input
          content="Name:"
          refInput={this.stepInputText}
          attributes={{
            type: 'text',
            name: 'name',
            placeholder: 'Name',
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
          content="
          I agree with my personal data"
          refInput={this.stepInputCheckbox}
          attributes={{
            name: 'personal-data',
          }}
        ></InputCheckbox>
        <button type="submit">submit</button>
      </form>
    );
  }
}
