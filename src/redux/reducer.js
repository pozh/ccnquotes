const initialState = {
  quotes: [],
  selectedQuote: {},
};


export default function (state = initialState, action) {
  switch (action.type) {
    case 'ADD':
      return {...state, quotes: state.quotes.concat(action.data)};

    case 'DELETE':
      const index = state.quotes.map(item => item.id).indexOf(action.id);
      return {...state, quotes: [...state.quotes].splice(index, 1)};

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
      return {...state, quotes: [...state.quotes], selectedQuote: {}};

    default:
      return state;
  }
}
