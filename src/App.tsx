import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Header from './components/Header';
import Welcome from './pages/Welcome/Welcome';

function App() {
  return (
    <div className="App">
      <Router>

        <Header></Header>
        <div className="page-container">
          <Switch>
            <Route path="/faq">FAQ</Route>
            <Route path="/contact">Contact</Route>
            <Route path="/services">Services</Route>
            <Route path="/about">Test</Route>
            <Route path="/"><Welcome></Welcome></Route>
          </Switch>
        </div>

      </Router>
    </div>
  );
}

export default App;
