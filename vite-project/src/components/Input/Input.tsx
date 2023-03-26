import { Component } from 'react';
import './Input.scss';
const mainClass = 'input-block';
import { IInput } from '../../models';
import { Message } from '../Message/Message';

export class Input extends Component<IInput> {
  constructor(props: IInput) {
    super(props);
  }
  render() {
    return (
      <div className={mainClass}>
        <label className={`${mainClass}__label`}>
          {this.props.content}
          <input
            className={`${mainClass}__input`}
            ref={this.props.refInput}
            {...this.props.attributes}
          />
        </label>
        <Message message={this.props.errorMessage} isError={this.props.isError} />
      </div>
    );
  }
}
