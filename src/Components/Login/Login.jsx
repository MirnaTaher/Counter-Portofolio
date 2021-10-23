import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";

/**
 * LoginForm Component
 */
const LoginForm = () => {
  const initialValues = {
    email: "",
    password: "",
    rememberMe: false,
  };
  const onSubmit = (values) => console.log(JSON.stringify(values, null, 4));
  const validationSchema = yup.object({
    email: yup
      .string()
      .email("Please enter a valid email address")
      .required("Email field is required"),
    password: yup.string().required("Password field is required"),
  });

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });
  return (
    <form  className="border rounded my-5 w-75 mx-auto shadow" onSubmit={formik.handleSubmit}>
      <div style={{ padding: 20 }}>
        <label htmlFor="email" style={{ display: "block" }}>
          Email
        </label>
        <input
        placeholder="Email"
        className="rounded border px-2"
          type="email"
          id="email"
          name="email"
          {...formik.getFieldProps("email")}
        />
        {formik.touched.email && formik.errors.email && (
          <div style={{ color: "red" }}>{formik.errors.email}</div>
        )}

        <label htmlFor="password" style={{ display: "block" }}>
          Password
        </label>
        <input
        placeholder="Password"
        className="rounded border px-2"
          type="password"
          id="password"
          name="password"
          {...formik.getFieldProps("password")}
        />
        {formik.touched.password && formik.errors.password && (
          <div style={{ color: "red" }}>{formik.errors.password}</div>
        )}

        <label htmlFor="rememberMe" style={{ display: "block" }}>
          remember me
        </label>
        <input
          type="checkbox"
          name="rememberMe"
          id="rememberMe"
          defaultChecked={formik.values.rememberMe}
          {...formik.getFieldProps("rememberMe")}
        />

        <button className="btn btn-primary d-block mx-auto">submit</button>
      </div>
    </form>
  );
};
export default LoginForm;