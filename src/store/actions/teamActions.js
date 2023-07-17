import api from "../../services/axios-config";
import { getTeamList } from "../../services/teamService/getTeamList";
import { getPerson } from "../../services/teamService/getPerson";
import { SET_SELECTED_PERSON, SET_TEAM_LIST, INCREMENT_CURRENT_PAGE, SET_TOTAL_PAGE, SET_CURRENT_PAGE } from "../const";


export const fetchTeamList = (page) => {
  return async (dispatch) => {
    try {
      const response = await api.get(`/users?page=${page}`);
      console.log(response?.data?.data?.length)
      if(response?.data?.data?.length){
        dispatch(setTeamList(response.data.data));
        dispatch(setTotalPage(response.data.total_pages));
      }

    } catch (error) {
      console.log('Error fetching team list:', error);
    }
  };
};
export const setTeamList = (team) => {
  return {
    type: SET_TEAM_LIST,
    payload: team,
  };
};
export const setTotalPage = (numPage) => {
  return {
    type: SET_TOTAL_PAGE,
    payload: numPage,
  };
};
export const incrementCurrentPage = () => {
  return {
    type: INCREMENT_CURRENT_PAGE
  };
};
export const setCurrentPage = (numPage) => {
  return {
    type: SET_CURRENT_PAGE,
    payload: numPage,
  };
};

export const fetchPerson = (id) => {
  return async (dispatch) => {
    try {
      const response = await api.get(`/users/${id}`);
      dispatch(setSelectedPerson(response?.data?.data));
    } catch (error) {
      console.log(`Error fetching person with ID ${id}:`, error);
    }
  };
};

export const setSelectedPerson = (person) => {
  return {
    type: SET_SELECTED_PERSON,
    payload: person,
  };
};
