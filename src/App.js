import './App.scss';
import LandingPage from './views/LandingPage'
import Navigation from './components/navigation/navigation'
import { Fragment } from 'react';

function App() {
  return (
    <Fragment>
      <Navigation />
      <LandingPage />
    </Fragment>
  )
}

export default App;
