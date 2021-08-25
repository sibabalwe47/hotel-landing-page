import './App.scss';
import LandingPage from './views/LandingPage'
import Navigation from './components/navigation/navigation'
import { Fragment } from 'react';
import {Provider} from 'react-redux'
import store from './store/store'
import Test from './components/test/test';

function App() {
  return (
   <Provider store={store}>
      <Fragment>
        <Navigation />
        <LandingPage />
      </Fragment>
   </Provider>
  )
}

export default App;
