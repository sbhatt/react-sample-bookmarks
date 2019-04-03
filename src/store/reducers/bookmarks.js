import {ADD_BOOKMARK, EDIT_BOOKMARK, DELETE_BOOKMARK, BOOKMARK_LOADED } from '../actionTypes';

import BookmarkService from '../../service/Bookmark';

export default function(state = {}, action){
  switch(action.type){
    case ADD_BOOKMARK:
    case EDIT_BOOKMARK:
    {
      const bookmarkVO = action.payload;
      const newState = {
        ...state
      };
      newState[bookmarkVO.id] = bookmarkVO;
      return newState;
    }
    case DELETE_BOOKMARK:
    {
      const id = action.payload;
      const newState = {
        ...state
      };
      delete newState[id];
      return newState;
    }
    case BOOKMARK_LOADED: {
      const bookmarkCollection = action.payload;
      const newState = {
        ...state
      };
      bookmarkCollection.forEach((bookmark) => {
        const bookmarkVO = BookmarkService.createBookmarkVO(
          bookmark['_id']['$oid'], 
          bookmark.type, 
          bookmark.title, 
          bookmark.description, 
          bookmark.href, 
          bookmark.tags);
        newState[bookmarkVO.id] = bookmarkVO;
      });
      return newState;
    }
    default:
      return state;
  }
}