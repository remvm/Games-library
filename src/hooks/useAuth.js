import { useDispatch, useSelector } from "react-redux";
import { Register, Login } from "../auth/auth-firebase";
import { auth } from "../firebase/firebase";
import { removeUser, setUser } from "../store/reducers/userSlice";
import { userSelector } from "../store/selectors";

export function useAuth() {
  const user = useSelector(userSelector.user);
  const isAuth = useSelector(userSelector.isAuth);
  const dispatch = useDispatch();

  const authUser = () => {
    const unsubscribe = auth.onAuthStateChanged(async (person) => {
      if (person) {
        dispatch(setUser(person));
      }
      unsubscribe();
    });
  };

  const loginUser = async (email, password) => {
    const userData = await Login(email, password);
    return userData;
  };

  const registerUser = async (email, password, displayName) => {
    const userData = await Register(email, password, displayName);
    return userData;
  };

  const logoutUser = () => {
    auth.signOut();
    dispatch(removeUser());
  };

  return {
    isAuth: isAuth,
    user: user,
    auth: authUser,
    login: loginUser,
    register: registerUser,
    logout: logoutUser,
  };
}
