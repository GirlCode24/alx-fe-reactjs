import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function FormikForm() {

  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string().email("Invalid email format").required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const initialValues = {
    username: "",
    email: "",
    password: "",
  };

  const handleSubmit = (values, { resetForm }) => {
    console.log("Formik form submitted successfully:", values);
    resetForm();
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="bg-white shadow-lg rounded-lg p-8 w-80">
          <h2 className="text-2xl font-bold mb-4 text-center">Formik Register</h2>

          {/* Username */}
          <div className="mb-4">
            <label className="block text-gray-700">Username</label>
            <Field
              type="text"
              name="username"
              className="w-full border rounded px-3 py-2 mt-1"
            />
            <ErrorMessage name="username" component="p" className="text-red-500 text-sm" />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <Field
              type="email"
              name="email"
              className="w-full border rounded px-3 py-2 mt-1"
            />
            <ErrorMessage name="email" component="p" className="text-red-500 text-sm" />
          </div>

          {/* Password */}
          <div className="mb-6">
            <label className="block text-gray-700">Password</label>
            <Field
              type="password"
              name="password"
              className="w-full border rounded px-3 py-2 mt-1"
            />
            <ErrorMessage name="password" component="p" className="text-red-500 text-sm" />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          >
            Register
          </button>
        </Form>
      </Formik>
    </div>
  );
}

export default FormikForm;
