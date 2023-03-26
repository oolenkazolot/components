import { Component } from 'react';
import './InputCheckbox.scss';
const mainClass = 'checkbox-block';
import { IInputCheckbox } from '../../models';
import { Message } from '../Message/Message';

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
        {this.props.errorMessage && (
          <Message message={this.props.errorMessage} isError={this.props.isError} />
        )}
      </div>
    );
  }
}
