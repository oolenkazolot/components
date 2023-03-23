import { Component } from 'react';
import './InputCheckbox.scss';
const mainClass: string = 'checkbox-block';
import { IInputCheckbox } from '../../models';

export class InputCheckbox extends Component<IInputCheckbox> {
  constructor(props: IInputCheckbox) {
    super(props);
  }
  render() {
    return (
      <div className={mainClass}>
        <label className={`${mainClass}__label`}>
          <input
            type="checkbox"
            className={`${mainClass}__input`}
            ref={this.props.refInput}
            {...this.props.attributes}
          />
          {this.props.content}
        </label>
      </div>
    );
  }
}
