import { Form, Formik } from "formik";
import { MySelect, MyTextInput } from "../components";
import formJson from "../data/custom-form.json";
import * as Yup from "yup";

interface OptionInterface {
  id: number;
  label: string;
}

interface ValidationOption {
  type: string;
  value?: string | number;
}

interface DataInterface {
  name: string;
  label: string;
  placeholder?: string;
  options?: OptionInterface[];
  type: string;
  validations?: ValidationOption[];
  [x: string]: any;
}

const initialValues: { [key: string]: any } = {};

const requiredFields: { [key: string]: any } = {};

for (const input of formJson) {
  initialValues[input.name] = input.value;

  if (!input.validations) continue;

  let schema = Yup.string();

  for (const rule of input.validations) {
    if (rule.type === "required")
      schema = schema.required("This field is required");

    if (rule.type === "minLength")
      schema = schema.min(1, `Minimum ${1} required`);

    if (rule.type === "email") schema = schema.email("Invalid format");
  }
  requiredFields[input.name] = schema;
}

const validationSchema = Yup.object({ ...requiredFields });

export const DynamicFormPage = () => {
  return (
    <div>
      <h1>Dynamic Form</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {(formik) => (
          <Form noValidate>
            {formJson.map(
              ({ type, name, placeholder, label, options }: DataInterface) => {
                if (
                  type === "input" ||
                  type === "password" ||
                  type === "email"
                ) {
                  return (
                    <MyTextInput
                      key={name}
                      name={name}
                      type={type as any}
                      label={label}
                      placeholder={placeholder}
                    />
                  );
                } else if (type === "select") {
                  return (
                    <MySelect key={name} name={name} label={label}>
                      <option value="">Select an option</option>
                      {options?.map(({ id, label }: OptionInterface) => (
                        <option key={id} value={id}>
                          {label}
                        </option>
                      ))}
                    </MySelect>
                  );
                }
                return <></>;
              }
            )}
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
