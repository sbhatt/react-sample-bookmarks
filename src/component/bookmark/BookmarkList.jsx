import React, { Component } from 'react';
import { connect } from "react-redux";

import BookmarkService from '../../service/Bookmark';

class BookmarkList extends Component {

  editBookmark(id) {
    //TODO
  }

  deleteBookmark(id) {
    BookmarkService.deleteBookmark(id);
  }

  render() {
    const bookmarks = this.props.bookmarkArr;
    return (
      <div>
        <h2>List of Bookmarks</h2>
        <fieldset>
          <legend>() => bookmark</legend>

        <ul>
          {bookmarks && bookmarks.length
            ? bookmarks.map((bookmarkVO, index) => {
              return <BookmarkListItem key={`bookmark-${bookmarkVO.id}`} bookmarkVO={bookmarkVO}
                deleteBookmark={this.deleteBookmark} editBookmark={this.editBookmark} />;
            })
            : "Go Ahead, Add Bookmarks !!!"}
        </ul>
        </fieldset>
      </div>
    );
  }

}

class BookmarkListItem extends Component {
  render() {
    const bookmarkVO = this.props.bookmarkVO;
    return (
      <li key={bookmarkVO.id}>
        <p>
          <b>{bookmarkVO.title}</b>
          &nbsp;&nbsp;<a href={bookmarkVO.href} target="_blank">Visit</a>
          &nbsp;&nbsp;<a onClick={e => this.props.deleteBookmark(bookmarkVO.id)} href="#">Remove</a>
          <br />
          <span>{bookmarkVO.description}</span>
          <br></br>
          <b>Tags:&nbsp;</b> <span>{bookmarkVO.tags}</span>
        </p>
      </li>
    );
  }
}

// SB todo handle edit case
//&nbsp;&nbsp;<a onClick={e => this.props.editBookmark(bookmarkVO.id)} href="#">Edit</a>

const mapStateToProps = state => {
  const { bookmarks, bookmarkFilter } = state;
  // filter bookmark based on filters
  var bookmarkArr = [];
  Object.keys(bookmarks).map(key => {
    var bookmark = bookmarks[key];
    var filters = bookmarkFilter.filters;
    if(filters && filters.length > 0){
      console.log('boookemar ::  ',bookmark);
      if(bookmark.tags){
        var allMatched = true;
        filters.map(filter => { 
          allMatched = bookmark.tags.toUpperCase().indexOf(filter.trim().toUpperCase())!=-1;
        })
        if(allMatched){
          bookmarkArr.push(bookmark);
        }
      }
    }else{
      bookmarkArr.push(bookmark);
    }
  });
  return { bookmarkArr };
};


export default connect(mapStateToProps)(BookmarkList);