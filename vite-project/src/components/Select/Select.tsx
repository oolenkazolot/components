import { Component } from 'react';
import './Select.scss';
import { Message } from '../Message/Message';
import { ISelect } from '../../models';

export class Select extends Component<ISelect> {
  mainClass: string;
  constructor(props: ISelect) {
    super(props);
    this.mainClass = 'select-block';
  }

  render() {
    return (
      <div className={this.mainClass}>
        <label className={`${this.mainClass}__label`} htmlFor={this.props.name}>
          {this.props.content}
        </label>
        <select
          defaultValue={this.props.defaultOption}
          className={`${this.mainClass}__select`}
          name={this.props.name}
          ref={this.props.refSelect}
          id={this.props.name}
          required
        >
          <option disabled>{this.props.defaultOption}</option>
          {this.props.options.map((value: string) => {
            return (
              <option key={value} value={value}>
                {value}
              </option>
            );
          })}
        </select>
        {this.props.errorMessage && (
          <Message message={this.props.errorMessage} isError={this.props.isError} />
        )}
      </div>
    );
  }
}
