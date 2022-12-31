import './App.css';
import thunk from 'redux-thunk';
import rootReducer from './reducers'
import './components/FontAwesomeIcons';
import UserBox from './components/page/UserBox';

import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

const store = createStore(rootReducer, applyMiddleware(thunk))

export default function App() {
  return (
    <Provider store={store}>
      <UserBox />
    </Provider>
  );
}
