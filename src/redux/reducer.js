const initialState = {
  quotes: [],
  selectedQuote: null,
  maxId: 0, // TODO: use in ADD
};


export default function (state = initialState, action) {
  switch (action.type) {
    case 'ADD':
      let id = 0;
      state.quotes.forEach(quote=>{if (quote.id > id) id=quote.id});
      const newQuote = Object.assign({id: id+1}, action.payload.quote);
      return {...state, quotes: [...state.quotes, newQuote]};

    case 'EDIT':
      const newQuotes = [...state.quotes];
      const idx = newQuotes.findIndex(quote => quote.id===action.payload.quote.id);
      newQuotes[idx] = {...action.payload.quote};
      return {...state, quotes: newQuotes};

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
        selectedQuote: state.quotes.filter(quote=>quote.id===findId)[0]
      };

    case 'CLOSE_VIEW':
      return {...state, quotes: [...state.quotes], selectedQuote: null};

    default:
      return state;
  }
}
