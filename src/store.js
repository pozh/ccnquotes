import { createStore, compose } from 'redux';
import reducer from './reducer';

export default createStore(reducer, compose(
    // https://github.com/zalmoxisus/redux-devtools-extension
    window.devToolsExtension ? window.devToolsExtension() : f => f
));
