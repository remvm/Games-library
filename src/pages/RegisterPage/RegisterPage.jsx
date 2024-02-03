import { useDispatch } from "react-redux";
import RegisterComponent from "../../components/register-form/register-form";
import { useAuth } from "../../hooks/useAuth";
import { setUser } from "../../store/reducers/userSlice";

function Register() {
  const dispatch = useDispatch();
  const { register } = useAuth();

  const onFormSubmit = async (email, password) => {
    const user = await register(email, password);

    if (user) {
      dispatch(setUser(user));
    }
  };

  return (
    <>
      <div>Регистрация</div>
      <RegisterComponent onFormSubmit={onFormSubmit}/>
    </>
  );
}

export default Register;
