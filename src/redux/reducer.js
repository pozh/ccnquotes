const initialState = {
  quotes: [
    {
      "id": 1,
      "author": "Billy Connolly",
      "body": "Before you judge a man, walk a mile in his shoes. After that who cares?... He’s a mile away and you’ve got his shoes!",
      "source": "http://billyconnolly.com/"
    },
    {
      "id": 2,
      "author": "Jeff Sickel",
      "body": "Deleted code is debugged code.",
      "source": "http://www.defprogramming.com/quotes-by/jeff-sickel/"
    },
  ],
};


export default function (state = initialState, action) {
  switch (action.type) {
    case 'LIST':
      return {...state, quotes: state.quotes.concat(action.data)};

    case 'ADD':
      return {...state, quotes: state.quotes.concat(action.data)};

    case 'DELETE':
      const index = state.quotes.map(item => item.id).indexOf(action.id);
      return {...state, quotes: [...state.quotes].splice(index, 1)};

    case 'FETCH':
      console.log(action.data);
      break;

    default:
      return state;
  }
}
