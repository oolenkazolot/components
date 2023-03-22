import { Component } from 'react';
import './Select.scss';

type TSelect = {
  countries: string[];
  name: string;
  content: string;
  refSelect: React.RefObject<HTMLSelectElement>;
};

export class Select extends Component<TSelect> {
  mainClass: string;
  constructor(props: TSelect) {
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
          className={`${this.mainClass}__select`}
          name={this.props.name}
          ref={this.props.refSelect}
          id={this.props.name}
          required
        >
          {this.props.countries.map((country: string) => {
            return (
              <option key={country} value={country}>
                {country}
              </option>
            );
          })}
        </select>
      </div>
    );
  }
}
