import { Form, Formik } from "formik";
import { MyTextInput } from "../components";
import * as Yup from "yup";
import "../styles/styles.css";

export const RegisterFormikPage = () => {
  return (
    <div>
      <h1>Register Formik Page</h1>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password1: "",
          password2: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .min(2, "Must be more than 2 characters")
            .max(15, "Must be 15 characters or less")
            .required("Required"),
          email: Yup.string().email("Invalid Format").required("Required"),
          password1: Yup.string().min(6, "Must be more than 6 characters"),
          password2: Yup.string()
            .oneOf([Yup.ref("password1")], "Passwords does not match")
            .required("Required"),
        })}
      >
        {({ handleReset }) => (
          <Form>
            <MyTextInput label="Name" name="name" />
            <MyTextInput label="Email" name="email" type="email" />
            <MyTextInput label="Password" name="password1" type="password" />
            <MyTextInput
              label="Repeat password"
              name="password2"
              type="password"
            />
            <button type="submit">Create</button>
            <button type="button" onClick={handleReset}>
              Reset
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
