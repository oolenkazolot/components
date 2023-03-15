import { Component } from 'react';
import './search.scss';
import '../../main.scss';

interface ISearchState {
  searchValue: string;
}

export class Search extends Component {
  private mainClass: string;
  public state: ISearchState;
  constructor(props: Component) {
    super(props);
    this.state = { searchValue: localStorage.getItem('searchValue') || '' };
    this.mainClass = 'search';
  }

  public componentWillUnmount(): void {
    localStorage.setItem('searchValue', this.state.searchValue);
  }

  private updateSearchValue(searchValue: string | null): void {
    this.setState(() => {
      return { searchValue: searchValue || '' };
    });
  }

  public render() {
    return (
      <section className={this.mainClass}>
        <i className={`${this.mainClass}__icon icon-search`}></i>
        <input className={`${this.mainClass}__input`} value={this.state.searchValue} onChange={(e) => this.updateSearchValue(e.target.value)} type="text" placeholder="Enter text" />
      </section>
    );
  }
}
