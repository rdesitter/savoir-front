/* eslint-disable no-underscore-dangle */
import { createStore, applyMiddleware, compose } from 'redux';
import reducer from 'src/reducers';
import fakeajax from 'src/middlewares/fakeajax';
import contactForm from '../middlewares/contactForm';

const middlewares = applyMiddleware(contactForm, fakeajax);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancers = composeEnhancers(middlewares);

const store = createStore(reducer, enhancers);

export default store;
