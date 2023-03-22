import { Component } from 'react';
import './RadioGroup.scss';

const mainClass: string = 'radio-group';

interface IRadioGroup {
  className?: string;
  content: string[];
  values: string[];
  refInput: React.RefObject<HTMLInputElement>[];
  attributes: Record<string, string | boolean>;
}

export class RadioGroup extends Component<IRadioGroup> {
  constructor(props: IRadioGroup) {
    super(props);
  }
  render() {
    return (
      <div className={mainClass}>
        {this.props.values.map((value, index) => {
          return (
            <div key={index} className={`${mainClass}__btn`}>
              <input
                type="radio"
                className={`${mainClass}__input`}
                value={value}
                ref={this.props.refInput[index]}
                {...this.props.attributes}
              />
              {this.props.content[index]}
            </div>
          );
        })}
      </div>
    );
  }
}
