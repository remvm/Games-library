import AuthComponent from "../../components/auth-form/auth-form";
import { useAuth } from "../../hooks/useAuth";
import { useDispatch } from "react-redux";
import { setUser } from "../../store/reducers/userSlice";

function LogIn() {
  const dispatch = useDispatch();
  const { login } = useAuth();

  const onFormSubmit = async (email, password) => {
    const user = await login(email, password);

    if (user) {
      dispatch(setUser(user));
    }
  };

  return (
    <>
      <div>Вход</div>
      <AuthComponent onFormSubmit={onFormSubmit} />
    </>
  );
}

export default LogIn;
