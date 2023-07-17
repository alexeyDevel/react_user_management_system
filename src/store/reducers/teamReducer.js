import { INCREMENT_CURRENT_PAGE, SET_CURRENT_PAGE, SET_SELECTED_PERSON, SET_TEAM_LIST, SET_TOTAL_PAGE } from "../const";

const initialState = {
    teamList: [],
    currentPage: 1,
    totalPages: 1,
    selectedPerson: null,
  };
  
  const teamReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_TEAM_LIST:
        return {
          ...state,
          teamList: action.payload,
        };
      case SET_SELECTED_PERSON:
        return {
          ...state,
          selectedPerson: action.payload,
        };
      case SET_TOTAL_PAGE:
        return {
          ...state,
          totalPages: action.payload,
        }
      case SET_CURRENT_PAGE:
        return {
          ...state,
          currentPage: action.payload,
        };
      case INCREMENT_CURRENT_PAGE:
        return {
          ...state,
          currentPage: state.currentPage + 1,
        };
      default:
        return state;
    }
  };
  
  export default teamReducer;
  