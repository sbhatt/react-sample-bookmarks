import { combineReducers } from "redux";
import bookmarks from "./bookmarks";
import bookmarkEdit from "./bookmarkEdit";
import bookmarkFilter from './bookmarkFilter';

export default combineReducers({ bookmarks, bookmarkEdit, bookmarkFilter });
