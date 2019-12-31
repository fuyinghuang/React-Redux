import {
  GET_POPULAR_MOVIES,
  SEARCH_MOVIES,
  LOAD_MORE_MOVIES,
  CLEAR_MOVIES,
  SHOW_LOAD_SPINNER
} from '../actions';

const defaultState = {
  movies: [],
  heroImage: null,
  loading: false,
  currentPage: 0,
  totalPages: 0,
  searchTerm: ''
};

export default function(state =  defaultState, action) {
  switch(action.type) {
    case GET_POPULAR_MOVIES:
      return {
        ...state,
        movies: action.payload.results,
        heroImage: state.heroImage || action.payload.results[0],
        loading: false,
        currentPage: state.payload.page,
        totalPages: state.payload.total_pages,
        searchTerm: ''
      };
    case LOAD_MORE_MOVIES:
      return {
        ...state,
        movies: [...state.movies, ...action.payload.results],
        loading: false,
        currentPage: state.payload.page,
        totalPages: state.payload.total_pages
      };
    case SEARCH_MOVIES:
      return {
        ...state,
        movies: action.payload.results, 
        loading: false,
        currentPage: state.payload.page,
        totalPages: state.payload.total_pages,
        searchTerm: state.payload.searchTerm
      };
    case CLEAR_MOVIES:
      return {
        ...state,
        movies: []
      };
    case SHOW_LOAD_SPINNER:
      return {
        ...state,
        loading: true
      };
  }
}