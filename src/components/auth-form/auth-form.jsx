import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'

function AuthComponent({onFormSubmit}) {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmitLogin = (data) => {
    onFormSubmit(data.email, data.password);
    reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmitLogin)}>
        <input type="text" placeholder="Email" {...register('email', { required: 'Email обязателен к заполнению' })} />
        {errors.email && <p>{errors.email.message}</p>}

        <input type="password" placeholder="Пароль" {...register('password', { required: 'Пароль обязателен к заполнению' })} />
        {errors.password && <p>{errors.password.message}</p>}

        {errors.server && <p>{errors.server.message}</p>}

        <button type="submit">Войти</button>
      </form>
      <div>Нет профиля?</div>
      <Link to={'register/'}>Зарегистрироваться</Link>
    </div>
  );
}

AuthComponent.propTypes = {
  onFormSubmit: PropTypes.func
}

export default AuthComponent;
