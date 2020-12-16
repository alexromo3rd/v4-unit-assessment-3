import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super();

    this.state = {
      userInput: ''
    }
  }

  handleChange(value) {
    this.setState({
      userInput: value
    })
  }

  handleClick() {
    // this.props.filterBooksFn()
    console.log('Search!');
  }

  handleClear() {
    // this.props.resetFn();
    console.log('Cleared!');
  }

  render() {
    return(
      <>
        <input onChange={(e) => this.handleChange(e.target.value)} />
        <button onClick={this.handleClick}>Search</button>
        <button onClick={this.handleClear}>Clear Search</button>
      </>
    )
  }
}

export default SearchBar;