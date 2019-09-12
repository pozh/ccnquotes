import axios from 'axios';

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

export const fetchQuotes = data => ({
  type: 'FETCH',
  payload: { data }
});

