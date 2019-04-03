import store from '../store/store';
import BookmarkVO from './BookmarkVO';

import { ADD_BOOKMARK, EDIT_BOOKMARK, DELETE_BOOKMARK, BOOKMARK_LOADED, BOOKMARK_ADD_EDIT_DONE
  , ADD_FILTER, REMOVE_FILTER, ADD_BUTTON_ACTION, HIDE_BUTTON_ACTION } from '../store/actionTypes';


// API URL for mongo don't change yet
const API_URL_GETALL = "https://api.mlab.com/api/1/databases/sbdb/collections/bookmarks?apiKey=C9KX0u5zuHMu1Th_d5qK-OT6tQvR75Jn";
const API_URL_DELETE = "https://api.mlab.com/api/1/databases/sbdb/collections/bookmarks/{_id}?apiKey=C9KX0u5zuHMu1Th_d5qK-OT6tQvR75Jn";

class Bookmark {

  static createBookmarkVO(id, type, title, description, href, tags) {
    const bookmarkVO = new BookmarkVO();
    bookmarkVO.id = id;
    bookmarkVO.type = type;
    bookmarkVO.title = title;
    bookmarkVO.description = description;
    bookmarkVO.href = href;
    bookmarkVO.tags = tags;
    return bookmarkVO;
  }

  static initBookmarkList() {
    //Call redux to load all bookmarks
    fetch(API_URL_GETALL)
      .then(respose => respose.json(), error => console.log('Error Occurred while loading :: ', error))
      .then(json => store.dispatch({ type: BOOKMARK_LOADED, payload: json }));
  }

  static deleteBookmark(id) {
    const deleteURL = API_URL_DELETE.replace('{_id}', id);
    fetch(deleteURL, {
      method: 'DELETE'
    })
      .then(respose => respose.status, error => console.log('Error Occurred while delete :: ', error))
      .then(status => {
        if(status === 200){
          store.dispatch({ type: DELETE_BOOKMARK, payload: id })
        }else{
          console.log('Some error in deleting bookmark status code ',status);
        }
      });
  }

  static addBookmark(bookmarkVO){
    fetch(API_URL_GETALL, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(bookmarkVO)
    })
      .then(response => response.json(), error => console.log('Error Saving New BookMark ', error))
      .then(responseJson => {
        store.dispatch({
          type: ADD_BOOKMARK,
          payload: responseJson
        })
        store.dispatch({
          type: BOOKMARK_ADD_EDIT_DONE
        });
      });
  }

  static getBookmark(id){    
    return store.getState().bookmarks[id];
  }

  static addFilter(filter){
    store.dispatch({
      type: ADD_FILTER,
      payload: filter
    });
  }

  static removeFilter(filter){
    store.dispatch({
      type: REMOVE_FILTER,
      payload: filter
    });
  }

  static showAddBookmark(){
    store.dispatch({
      type: ADD_BUTTON_ACTION
    });
  }

  static hideAddBookmark(){
    store.dispatch({
      type: HIDE_BUTTON_ACTION
    });
  }

}

export default Bookmark;