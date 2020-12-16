import React, { Component } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import BookList from './components/BookList';
import Shelf from './components/Shelf';
import data from './data';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      books: [],
      shelf: []
    }

    this.addToShelf = this.addToShelf.bind(this);
    this.clearShelf = this.clearShelf.bind(this);
    this.filterBooks = this.filterBooks.bind(this);
    this.reset = this.reset.bind(this);
  }

  componentDidMount() {
    this.setState({
      books: data
    })
  }

  addToShelf() {

  }

  clearShelf() {
    this.setState({
      shelf: []
    })
    console.log('Shelf was cleared');
  }

  filterBooks() {

  }

  reset() {

  }

  render() {
    return (
      <div className="App">
        <Header />
        <SearchBar filterBooksFn={this.filterBooks} resetFn={this.reset} />
        <BookList books={this.state.books} addToShelfFn={this.addToShelf} />
        <Shelf shelf={this.state.shelf} clearShelfFn={this.clearShelf} />
      </div>
    );
 }
}

export default App;
