import {ADD_BUTTON_ACTION, EDIT_BUTTON_ACTION, BOOKMARK_ADD_EDIT_DONE, HIDE_BUTTON_ACTION} from '../actionTypes';
import BookmarkService from '../../service/Bookmark';
import BookmarkVO from '../../service/BookmarkVO';

const initialState = {
  hide: true,
  bookmarkVO: new BookmarkVO()
};

export default function(state = initialState, action){

  switch(action.type){
    case ADD_BUTTON_ACTION:{
      return {
        hide: false,
        bookmarkVO: BookmarkService.createBookmarkVO('','','','','','')
      }
    }
    case BOOKMARK_ADD_EDIT_DONE:
    case HIDE_BUTTON_ACTION:
    {
      return {
        hide: true,
        bookmarkVO: BookmarkService.createBookmarkVO('','','','','','')
      }
    }
    case EDIT_BUTTON_ACTION:{
      var bookmarkVO = BookmarkService.getBookmark(action.payload) | BookmarkService.createBookmarkVO('','','','','','');
      return{
        hide: false,
        bookmarkVO: bookmarkVO
      }
    }
    default:
      return state;
  }

}