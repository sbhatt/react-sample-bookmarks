import React, { Component } from 'react';
import { connect } from 'react-redux';
import BookmarkService from '../../service/Bookmark';

import './styles.css';

class BookmarkActionBar extends Component {

  constructor(props){
    super(props);
    this.state = {
      input: ''
    };
  }

  updateInput = input => { 
    this.setState({
      input: input
    });
  };

  addFilter = () => {
    if(this.state.input && this.state.input.trim().length > 0){
      BookmarkService.addFilter(this.state.input);
      this.setState({
        input: ''
      });
    }
  }

  removeFilter = filter => {
    BookmarkService.removeFilter(filter);
  }

  toggleAddBookmark = () => {
    if(this.props.bookmarkEdit.hide){
      BookmarkService.showAddBookmark();
    }else{
      BookmarkService.hideAddBookmark();
    }
  }

  render() {
    return (
        <fieldset>
          <legend>Search Bookmark with Tag or create new</legend>
          <div id="bookmarkActionBar" className="fieldset-padding">
              <input value={this.state.input} onChange={e => this.updateInput(e.target.value)}></input>
              <button onClick={this.addFilter}>Filter By Tag</button>
              <button onClick={this.toggleAddBookmark}>{this.props.bookmarkEdit.hide? "Add New Bookmark": "Hide New Bookmark"} </button>
              <br></br>
              <FilterList filters={this.props.bookmarkFilter.filters} removeFilter={this.removeFilter}></FilterList>
          </div>
        </fieldset>
    );
  }

}

const FilterList = ({filters, removeFilter}) => (
  <p>
    {filters && filters.length
      ? filters.map((filter, index) => {
          return <span className="filter-tags" key={index} onClick={e => removeFilter(filter)} value={filter}>x {filter}</span>;
        })
      : "Use Input to search Bookmark By tags"}
  </p>
);

const mapStateToProps = state => {
  const { bookmarkFilter, bookmarkEdit } = state;
  return { bookmarkFilter, bookmarkEdit };
};


export default connect(mapStateToProps)(BookmarkActionBar);