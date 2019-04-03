import React, { Component } from 'react';
import BookmarkService from '../../service/Bookmark';
import { connect } from "react-redux";

class BookmarkEdit extends Component {

  constructor(props){
    super(props);
    this.state = {
      bookmarkVO: BookmarkService.createBookmarkVO('','','','','','')
    };
  }

  updateInput = (key, val) => {
    const newBookmarkVO = this.state.bookmarkVO;
    newBookmarkVO[key] = val;
    this.setState({
      bookmarkVO: newBookmarkVO
    });
  }

  editBookmark = (event) => {
    event.preventDefault();
    if(!this.state.bookmarkVO.href){
      return;
    }
    //do insert new bookmark
    BookmarkService.addBookmark(this.state.bookmarkVO);
    
    this.setState({
      bookmarkVO: BookmarkService.createBookmarkVO('','','','','','')
    });
  }

  render() {
    const bookmarkVO = this.state.bookmarkVO;
    const hide = this.props.bookmarkEdit.hide;
    return (
      <div id="editBookMark" className={hide?'hide':'show'}>
      <fieldset>
          <legend>Add a New BookMark</legend>

        <form onSubmit={this.editBookmark}>
          <h6>Add/Customize BookMark</h6>
          <table>
            <tbody>
              <tr>
                <td><label htmlFor="href">Href</label></td>
                <td><input required="required" id="href" type="text" value={bookmarkVO.href} onChange={e => this.updateInput('href', e.target.value)}></input></td>
              </tr>
              <tr>
                <td><label htmlFor="title">Title</label></td>
                <td><input required="required" id="title" type="text" value={bookmarkVO.title} onChange={e => this.updateInput('title', e.target.value)}></input></td>
              </tr>
              <tr>
                <td><label htmlFor="description">Description</label></td>
                <td><input id="description" type="text" value={bookmarkVO.description} onChange={e => this.updateInput('description', e.target.value)}></input></td>
              </tr>
              <tr>
                <td><label htmlFor="tags">Tags</label></td>
                <td><input id="tags" type="text" value={bookmarkVO.tags} onChange={e => this.updateInput('tags', e.target.value)}></input></td>
              </tr>
              <tr>
                <td></td>
                <td><input type="submit" value="Add New Bookmark" /></td>
              </tr>
            </tbody>
          </table>
        </form>
        </fieldset>
      </div>
    );
  };

}

const mapStateToProps = state => {
  const { bookmarkEdit } = state;
  return { bookmarkEdit };
};

export default connect(mapStateToProps)(BookmarkEdit);
