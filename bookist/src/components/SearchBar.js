import React, { Component } from 'react';
import './SearchBar.css';

class SearchBar extends Component {
  constructor(props) {
    super();

    this.state = {
      userInput: ''
    }

    this.handleClick = this.handleClick.bind(this);
    this.handleClear = this.handleClear.bind(this);
  }

  handleChange(value) {
    this.setState({
      userInput: value
    })
  }

  handleClick() {
    this.props.filterBooksFn(this.state.userInput)
  }

  handleClear() {
    this.props.resetFn();
    this.setState({
      userInput: ''
    })
  }

  render() {
    return(
      <div className='search-bar'>
        <input value={this.state.userInput} onChange={(e) => this.handleChange(e.target.value.toLowerCase())} />
        <button onClick={this.handleClick}>Search</button>
        <button onClick={this.handleClear}>Clear Search</button>
      </div>
    )
  }
}

export default SearchBar;