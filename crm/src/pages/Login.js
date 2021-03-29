import AuthForm from '../components/AuthForm';
import { useAuth } from '../contexts/authContext';

export default function Login() {
  const auth = useAuth();

  return (
    <>
      <h1>Авторизация</h1>
      <AuthForm onLogin={auth.login} />
    </>
  );
}