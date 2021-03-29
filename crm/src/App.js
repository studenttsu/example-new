import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/authContext';
import PrivateRoute from './components/PrivateRoute';
import Login from './pages/Login';
import Masters from './pages/Masters';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import NavBar from './components/NavBar';
import './App.scss';

function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="container">
          <header>
            <h2>Beauty Saloon</h2>
            <NavBar />          
          </header>

          <main>
            <Switch>
              <PrivateRoute exact path="/">
                <Home />
              </PrivateRoute>

              <PrivateRoute path="/masters">
                <Masters />
              </PrivateRoute>

              <Route path="/login">
                <Login />
              </Route>

              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
          </main>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
