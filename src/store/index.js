/* eslint-disable no-underscore-dangle */
import { createStore, applyMiddleware, compose } from 'redux';
import reducer from 'src/reducers';
import contactForm from '../middlewares/contactForm';
import search from '../middlewares/search';
import ajax from '../middlewares/ajax';
import logOutSession from '../middlewares/logOutSession';
import posts from '../middlewares/posts';

const middlewares = applyMiddleware(contactForm, ajax, search, logOutSession, posts);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancers = composeEnhancers(middlewares);

const store = createStore(reducer, enhancers);

export default store;
