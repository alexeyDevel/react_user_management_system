import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import teamReducer from './reducers/teamReducer';
// Импортируйте другие редьюсеры, если они у вас есть

const rootReducer = combineReducers({
  team: teamReducer,
  // Добавьте другие редьюсеры, если они у вас есть
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));


export default store;