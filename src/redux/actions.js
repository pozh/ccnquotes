import axios from 'axios';

const API_URL = 'http://localhost:3001/quotes';


/**
 * Functions to dispatch
 */
export const addQuote = content => ({
  type: 'ADD',
  payload: {
    content
  }
});

export const editQuote = content => ({
  type: 'EDIT',
  payload: {
    content
  }
});

export const viewQuote = id => ({
  type: 'VIEW',
  payload: { id }
});

export const closeView = () => ({
  type: 'CLOSE_VIEW'
});

export const fetchQuotes = data => ({
  type: 'FETCH',
  payload: { data }
});

export const fetchQuotesApi = () => {
  return (dispatch) => {
    return axios.get(API_URL)
        .then(response => {
          dispatch(fetchQuotes(response.data))
        })
        .catch(error => {
          throw(error);
        });
  };
};
