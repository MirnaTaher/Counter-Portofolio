import { Field } from "formik";
import React from "react";
// import FormikErrorMessage from "./FormikErrorMessage";
/** * FormikRadio Component */ 
const FormikRadio = ({ options, name }) => {
  return (
    <Field name={name}>
      {" "}
      {(formikField) => {
        return (
          <div {...formikField.field}>
            {" "}
            {options.map((o, i) => {
              return (
                <React.Fragment key={JSON.stringify(i)}>
                  {" "}
                  <label htmlFor={`${o.label}-${i}`}>{o.label}</label>{" "}
                  <input
                    type="radio"
                    id={`${o.label}-${i}`}
                    name="gender"
                    value={o.value}
                    checked={o.value === formikField.field.value}
                  />{" "}
                </React.Fragment>
              );
            })}{" "}
           <p>error</p>{" "}
            {/* <pre>{JSON.stringify(formikField, null, 4)}</pre> */}{" "}
          </div>
        );
      }}{" "}
    </Field>
  );
};
export default FormikRadio;
