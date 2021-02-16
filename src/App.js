import './App.css';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Home from './Home';
import SearchPage from './SearchPage';
import Header from './Header';
import Footer from './Footer';

function App() {
  return (
    <div className="app">
      <Router>
        <Header/>

        <Switch>

          <Route path='/search' component={SearchPage}/>
          <Route path='/' component={Home}/>

        </Switch>

        <Footer/>
      </Router>
    </div>
  );
}

export default App;
