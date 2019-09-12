const initialState = {
  quotes: [],
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
      break;

    default:
      return state;
  }
}
