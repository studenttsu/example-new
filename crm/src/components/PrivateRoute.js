import { Route, Redirect } from 'react-router-dom';
import { useAuth } from '../contexts/authContext';

export default function PrivateRoute({ children, ...rest }) {
  const { isAuth } = useAuth();

  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuth ? (
          children
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
}
