import React from "react";
import { Field } from "formik";
import FormikErrorMessage from "./FormikErrorMessage";

/**
 * FormikField Component
 */
const FormikField = ({ name, type, label }) => {
  return (
    <Field name={name}>
      {(formikField) => {
        return (
          <div className="my-3">
            <label htmlFor={name} className="d-block pb-2">
              {label}
            </label>
            <input
              className="rounded border px-2"
              type={type}
              id={name}
              placeholder={label}
              {...formikField.field}
              defaultChecked={formikField.field.value}
            />
            <FormikErrorMessage name={name} />
          </div>
        );
      }}
    </Field>
  );
};

export default FormikField;