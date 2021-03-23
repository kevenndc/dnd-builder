import { createStore } from 'react-redux'
import rootReducer from './reducer';

const store = createStore(rootReducer);

export default store;