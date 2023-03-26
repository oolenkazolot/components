import { Component } from 'react';
import './RadioGroup.scss';
import { IRadioGroup } from '../../models';
import { Message } from '../Message/Message';

const mainClass: string = 'radio-group';

export class RadioGroup extends Component<IRadioGroup> {
  constructor(props: IRadioGroup) {
    super(props);
  }
  render() {
    return (
      <div className={mainClass}>
        {this.props.values.map((value, index) => {
          return (
            <label key={index} className={`${mainClass}__btn`}>
              <input
                type="radio"
                className={`${mainClass}__input`}
                value={value}
                ref={this.props.refInput[index]}
                {...this.props.attributes}
              />
              {this.props.content[index]}
            </label>
          );
        })}
        {this.props.errorMessage && <Message message={this.props.errorMessage} isError={true} />}
      </div>
    );
  }
}
