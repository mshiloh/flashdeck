import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import decksReducer from "./decks.js";
import cardsReducer from "./cards.js";

const store = createStore(combineReducers({ decks: decksReducer, cards: cardsReducer }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk));

store.subscribe(() => console.log(store.getState()));

export default store;