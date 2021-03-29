import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import Login from './pages/Login';
import Masters from './pages/Masters';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import './App.scss';

function App() {
  return (
    <Router>
      <div className="container">
        <header>
          <h1>Beauty Saloon</h1>

          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/masters">Masters</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </ul>
          </nav>
        </header>

        <main>
          <Switch>
          <Route exact path="/">
              <Home />
            </Route>

            <Route path="/masters">
              <Masters />
            </Route>

            <Route path="/login">
              <Login />
            </Route>            

            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
