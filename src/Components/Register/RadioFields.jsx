import { Field } from "formik";
import React from "react";
import FormikErrorMessage from "./FormikErrorMessage";

const RadioFields = ({option1,option2,name}) => {
  return (
    <div className="my-3">
    <label className="d-block">Choose {name}</label>
      <label>{option1}</label>
      <Field type="radio" name={name} value={option1} className="me-2"></Field>
      <label>{option2}</label>
      <Field type="radio" name={name} value={option2}></Field>
      <FormikErrorMessage name={name} />
    </div>
  );
};

export default RadioFields;
