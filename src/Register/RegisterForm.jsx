import React from "react";
import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import * as yup from "yup";
import FormikErrorMessage from './FormikErrorMessage'
// import HobbiesList from "./Fieldarray";
// import FormikRadio from "./Radio";

// confirmPassword: "",  // must match password
// active: false, // required
// gender: "",  // required (drop down)
// hoppies: [""], // (field array)

/**
 * RegisterForm Component
 */
const RegisterForm = () => {
  const initialValues = {
    email: "",
    password: "",
    confirmPassword: "",
    active: false,
    hobbies: [""],
  };
  const onSubmit = (values) => console.log(JSON.stringify(values, null, 4));
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
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {(formik) => {
        return (
          <Form>
            <div style={{ padding: 20 }}>
              <Field name="username">
                {(formikField) => {
                  return (
                    <>
                      <label htmlFor="username" style={{ display: "block" }}>
                        username
                      </label>
                      <input
                        type="username"
                        id="username"
                        {...formikField.field}
                      />
                      <ErrorMessage name="username">
                        {(errMessage) => {
                          return (
                            <div style={{ color: "red" }}>{errMessage}</div>
                          );
                        }}
                      </ErrorMessage>
                      {/* <pre>{JSON.stringify(formikField, null, 4)}</pre> */}
                    </>
                  );
                }}
              </Field>

              <Field name="email">
                {(formikField) => {
                  return (
                    <>
                      <label htmlFor="email" style={{ display: "block" }}>
                        email
                      </label>
                      <input type="email" id="email" {...formikField.field} />
                      <ErrorMessage name="email">
                        {(errMessage) => {
                          return (
                            <div style={{ color: "red" }}>{errMessage}</div>
                          );
                        }}
                      </ErrorMessage>
                      {/* <pre>{JSON.stringify(formikField, null, 4)}</pre> */}
                    </>
                  );
                }}
              </Field>

              <Field name="password">
                {(formikField) => {
                  return (
                    <>
                      <label htmlFor="password" style={{ display: "block" }}>
                        password
                      </label>
                      <input
                        type="password"
                        id="password"
                        {...formikField.field}
                      />
                      <ErrorMessage name="password">
                        {(errMessage) => {
                          return (
                            <div style={{ color: "red" }}>{errMessage}</div>
                          );
                        }}
                      </ErrorMessage>
                      {/* <pre>{JSON.stringify(formikField, null, 4)}</pre> */}
                    </>
                  );
                }}
              </Field>

              <Field name="confirmPassword">
                {(formikField) => {
                  return (
                    <>
                      <label
                        htmlFor="confirmPassword"
                        style={{ display: "block" }}
                      >
                        Confirm Password
                      </label>
                      <input
                        type="password"
                        id="confirmPassword"
                        {...formikField.field}
                      />
                      <ErrorMessage name="confirmPassword">
                        {(errMessage) => {
                          return (
                            <div style={{ color: "red" }}>{errMessage}</div>
                          );
                        }}
                      </ErrorMessage>
                      {/* <pre>{JSON.stringify(formikField, null, 4)}</pre> */}
                    </>
                  );
                }}
              </Field>

              
              {/* <FormikRadio options={[{label: 'Male', value: 'male'}, {label: 'Female', value: 'female'}]}
               name='gender'/> */}

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
                                placeholder="Hobby"
                                name={`hobbies.${index}`}
                              />
                              <ErrorMessage name={`hobbies.${index}`} />
                              <br />
                              <button
                                type="button"
                                onClick={() => arrayHelpers.remove(index)} // remove a friend from the list
                              >
                                -
                              </button>
                              <br />
                              <br />
                            </div>
                          ))
                        : null}
                      <button
                        type="button"
                        onClick={() => arrayHelpers.push("")} // insert an empty string at a position
                      >
                        add a Hobby
                      </button>
                      {/* <br />
                      <br />
                      <br />
                      <div>
                        <button type="submit">Form Submit</button>
                      </div> */}
                    </div>
                  );
                }}
              />

              <Field name="active">
                {(formikField) => {
                  return (
                    <>
                      <label htmlFor="active" style={{ display: "block" }}>
                        active
                      </label>
                      <input
                        type="checkbox"
                        id="active"
                        defaultChecked={formikField.field.value}
                        {...formikField.field}
                      />
                      {/* <pre>{JSON.stringify(formikField, null, 4)}</pre> */}
                    </>
                  );
                }}
              </Field>
              <button style={{ display: "block" }}>submit</button>
            </div>
            <pre>{JSON.stringify(formik, null, 4)}</pre>
          </Form>
        );
      }}
    </Formik>
  );
};
export default RegisterForm;
