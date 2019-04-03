import React, { Component } from 'react';

import BookmarkActionBar from './BookmarkActionBar';
import BookmarkEdit from './BookmarkEdit';
import BookmarkList from './BookmarkList';

import BookmarkService from '../../service/Bookmark';

class Bookmark extends Component {

  componentDidMount(){
    BookmarkService.initBookmarkList();
  }

  render(){
    return (
      <div id="bookmarkContainer">
        <h2>Manage your bookmarks</h2>
        <BookmarkActionBar></BookmarkActionBar>
        <BookmarkEdit></BookmarkEdit>
        <BookmarkList></BookmarkList>
      </div>
    );
  }

}

export default Bookmark;