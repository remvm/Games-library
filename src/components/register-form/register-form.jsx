import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types'

function RegisterComponent({onFormSubmit}) {

  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmitRegister = (data) => {
    onFormSubmit(data.email, data.password, data.displayName);
    reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmitRegister)}>
        <input type="text" placeholder="Email" {...register('email', { required: 'Email обязателен к заполнению' })} />
        {errors.email && <p>{errors.email.message}</p>}

        <input type="password" placeholder="Пароль" {...register('password', { required: 'Пароль обязателен к заполнению' })} />
        {errors.password && <p>{errors.password.message} </p>}

        <input type="text" placeholder="Имя" {...register('displayName', { required: 'Имя обязательно к заполнению' })} />
        {errors.displayName && <p>{errors.displayName.message} </p>}

        {errors.server && <p>{errors.server.message}</p>}

        <button type="submit">Зарегистрироваться</button>
      </form>
    </div>
  );
}

RegisterComponent.propTypes = {
  onFormSubmit: PropTypes.func
}

export default RegisterComponent;
