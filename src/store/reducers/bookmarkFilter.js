import {ADD_FILTER, REMOVE_FILTER} from '../actionTypes';

export default function(state = {filters: []}, action){

  switch(action.type){
    case ADD_FILTER: {
      let newFilter = state.filters.slice();
      newFilter.push(action.payload);
      return {
        filters: newFilter
      }
    }
    case REMOVE_FILTER: {
      let newFilter = state.filters.slice();
      var index = newFilter.indexOf(action.payload);
      if (index > -1) {
        newFilter.splice(index, 1);
      }    
      return {
        filters: newFilter
      }
    }
    default:
      return state;
  }

}