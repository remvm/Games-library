import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/firebase';


const Register = async (email, password, displayName) => {

  const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  const user = userCredential.user;

  await updateProfile(user, { displayName: displayName });

  return user;
};

const Login = async (email, password) => {

  const userCredential = await signInWithEmailAndPassword(auth, email, password);
  const user = userCredential.user;

  return user;
};

export { Register, Login }
