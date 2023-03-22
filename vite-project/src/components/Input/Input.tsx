import { Component } from 'react';
import './Input.scss';
const mainClass: string = 'input-block';

interface IInput {
  className?: string;
  content?: string;
  refInput: React.RefObject<HTMLInputElement>;
  attributes: Record<string, string | boolean>;
}

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
