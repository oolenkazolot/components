import { Component } from 'react';
import './Input.scss';
const mainClass: string = 'input-block';
import { IInput } from '../../models';

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
      </div>
    );
  }
}
