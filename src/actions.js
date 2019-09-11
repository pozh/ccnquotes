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

