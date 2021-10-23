import React from "react";
import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import * as yup from "yup";
import FormikField from "../../shared/FormikField";
import RadioFields from "../../shared/RadioFields";

/**
 * RegisterForm Component
 */
const RegisterForm = () => {
  const initialValues = {
    username:"",
    email: "",
    password: "",
    confirmPassword: "",
    active: false,
    gender:"Female",
    hobbies: [""],
  };
  const onSubmit = () => window.alert("Thank you for registering!");
  const validationSchema = yup.object({
    username: yup
      .string("Please enter a valid username")
      .required("Usernam field is required"),
    email: yup
      .string()
      .email("Please enter a valid email address")
      .required("Email field is required"),
    password: yup.string().required("Password field is required"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match")
      .required("Cofirm password field is required"),
      gender: yup.string().required("This gender field is required")
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}>
      {(formik) => {
        return (
          <Form className="border rounded my-5 w-75 mx-auto shadow">
            <div style={{ padding: 20 }}>
            <FormikField name="username" label="Username" type="text"></FormikField>
            <FormikField name="email" label="Email" type="email"></FormikField>
            <FormikField name="password" label="Password" type="password"></FormikField>
            <FormikField name="confirmPassword" label="Confrim Password" type="password"></FormikField>
            
            <RadioFields name="gender" option1="Male" option2="Female"/>

              {/* <FormikRadio options={[{label: 'Male', value: 'male'}, {label: 'Female', value: 'female'}]}
               name='gender'/> */}
              {/* <FormikFieldArray name="hobbies" values="formik.values.hobbies" placeholder="Hobby" label="Hobbies"/> */}
              <FieldArray
                name="hobbies"
                render={(arrayHelpers) => {
                  const hobbies = formik.values.hobbies;
                  return (
                    <div>
                      {hobbies && hobbies.length > 0
                        ? hobbies.map((hobby, index) => (
                            <div key={index}>
                              <Field
                              className="rounded border px-2"
                                placeholder="Hobby"
                                name={`hobbies.${index}`}
                              />
                              <ErrorMessage name={`hobbies.${index}`} />
                              <br />
                              <button
                                type="button"
                                onClick={() => arrayHelpers.remove(index)}
                                className="btn btn-danger my-2"
                              >
                                X
                              </button>
                            </div>
                          ))
                        : null}
                      <button
                      className="btn btn-warning my-2"
                        type="button"
                        onClick={() => arrayHelpers.push("")} // insert an empty string at a position
                      >
                        add a Hobby
                      </button>
                    </div>
                  );
                }}
              />
              
              <FormikField name="active" label="Active" type="checkbox"></FormikField>

              <button className="btn btn-primary">submit</button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};
export default RegisterForm;
