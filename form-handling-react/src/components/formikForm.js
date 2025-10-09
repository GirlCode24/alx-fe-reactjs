import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const FormikForm = () => {
  // Step 1: Define validation schema with Yup
  const validationSchema = Yup.object({
    username: Yup.string()
      .required('Username is required'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
  });

  // Step 2: Initial field values
  const initialValues = {
    username: '',
    email: '',
    password: '',
  };

  // Step 3: Handle form submission
  const handleSubmit = (values, { resetForm }) => {
    console.log('Form submitted:', values);
    alert('Form submitted successfully!');
    resetForm();
  };

  // Step 4: Build the form UI
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-80">
        <h2 className="text-2xl font-bold mb-4 text-center">Register</h2>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            {/* Username Field */}
            <div className="mb-4">
              <label className="block text-gray-700">Username</label>
              <Field
                type="text"
                name="username"
                className="w-full border rounded px-3 py-2 mt-1"
              />
              <ErrorMessage
                name="username"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            {/* Email Field */}
            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <Field
                type="email"
                name="email"
                className="w-full border rounded px-3 py-2 mt-1"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            {/* Password Field */}
            <div className="mb-6">
              <label className="block text-gray-700">Password</label>
              <Field
                type="password"
                name="password"
                className="w-full border rounded px-3 py-2 mt-1"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
            >
              Register
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default FormikForm;
