import { FormEvent } from "react";
import "../styles/styles.css";
import { useForm } from "../hooks/useForm";

export const RegisterPage = () => {
  const {
    name,
    email,
    password1,
    password2,
    formData,
    isValidEmail,
    onChange,
    resetForm,
  } = useForm({
    name: "",
    email: "",
    password1: "",
    password2: "",
  });

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <div>
      <h1>Register Page</h1>
      <form onSubmit={onSubmit}>
        <input
          name="name"
          type="text"
          placeholder="Name"
          value={name}
          onChange={onChange}
          className="has-error"
        />
        {name.trim().length <= 0 && <span>Este campo es necesario</span>}
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={onChange}
        />
        {!isValidEmail(email) && <span>Email no es válido</span>}
        <input
          type="password"
          name="password1"
          placeholder="Password"
          value={password1}
          onChange={onChange}
        />
        {password1.trim().length <= 0 && <span>Este campo es necesario</span>}
        {password1.trim().length < 6 && password1.trim().length > 0 && (
          <span>La contraseña debe contener 6 letras</span>
        )}
        <input
          type="password"
          name="password2"
          placeholder="Repeat Password"
          value={password2}
          onChange={onChange}
        />
        {password2.trim().length <= 0 && <span>Este campo es necesario</span>}
        {password2.trim().length > 0 && password1 !== password2 && (
          <span>Este campo es necesario</span>
        )}
        <button type="submit">Create</button>
        <button type="button" onClick={resetForm}>
          Reset
        </button>
      </form>
    </div>
  );
};
