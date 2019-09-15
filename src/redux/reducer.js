const initialState = {
  quotes: [],
  selectedQuote: null,
  maxId: 0, // TODO: use in ADD
  status: 'list', // list|view|add|edit. No constants for now, a string is enough.
};


export default function (state = initialState, action) {
  switch (action.type) {
    case 'ADD_FORM':
      return {...state, quotes: [...state.quotes], status: 'add'};

    case 'ADD':
      let id = 0;
      state.quotes.forEach(quote=>{if (quote.id > id) id=quote.id});
      const newQuote = Object.assign({id: id+1}, action.payload.quote);
      return {...state, quotes: [...state.quotes, newQuote]};

    case 'UPDATE':
      // TODO: implement
      return {...state};

    case 'EDIT':
      return {
        quotes: [...state.quotes],
        selectedQuote: null,
        editQuote: state.quotes.filter(quote=>quote.id===action.payload.id)[0]
      };

    case 'DELETE':
      const index = state.quotes.map(item => item.id).indexOf(action.payload.id);
      let quotes = [...state.quotes];
      quotes.splice(index, 1);
      return {...state, quotes};

    case 'FETCH':
      return {...state, quotes: [...action.payload.data]};

    case 'VIEW':
      const findId = action.payload.id;
      return {
        ...state,
        quotes: [...state.quotes],
        status: 'view',
        selectedQuote: state.quotes.filter(quote=>quote.id===findId)[0]
      };

    case 'CLOSE_VIEW':
      return {...state, quotes: [...state.quotes], selectedQuote: null};

    default:
      return state;
  }
}
