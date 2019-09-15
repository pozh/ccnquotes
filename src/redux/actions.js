import axios from 'axios';

const API_URL = 'http://localhost:3001/quotes';


/**
 * Functions to dispatch
 */
export const addQuote = quote => ({
  type: 'ADD',
  payload: {
    quote
  }
});

export const editQuote = quote => ({
  type: 'EDIT',
  payload: {
    quote
  }
});

export const deleteQuote = id => ({
  type: 'DELETE',
  payload: { id }
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
