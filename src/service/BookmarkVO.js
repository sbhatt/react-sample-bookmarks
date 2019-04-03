class BookmarkVO {
  id;
  type = 'GENERIC';
  title;
  description;
  href;
  tags;

  isNew(){
    return this.id === null || this.id === '';
  }

  isGenricBookmark(){
    return this.type === 'GENERIC';
  }

  isYoutubeBookmark(){
    return this.type === 'YOUTUBE';
  }

  setTypeAsYoutube(){
    this.type = 'YOUTUBE';
  }

  setTypeAsGeneric(){
    this.type = 'GENERIC';
  }

};

export default BookmarkVO;