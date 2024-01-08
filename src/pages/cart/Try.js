import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export default function Try () {
  const formik = useFormik({
    initialValues: {

      firstName: '',
      lastName: '',
      email: '',

      name: "",
      Country: "",
      First: "",
      Last: "",
      Instagram: "",
      Address: "",
      Apartment: "",
      City: "",
      State: "",
      PIN: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
      lastName: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),

    //   name: Yup.string().required('Required'),
    //   Country: Yup.string().required('Required'),
    //   First: Yup.string().required('Required'),
    //   Last: Yup.string().required('Required'),
    //   Instagram: Yup.string().required('Required'),
    //   Address: Yup.string().required('Required'),
    //   Apartment: Yup.string().required('Required'),
    //   City: Yup.string().required('Required'),
    //   State: Yup.string().required('Required'),
    //   PIN: Yup.number().required('Required'),
    }),
    onSubmit: values => {
      console.log(values)
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="firstName">First Name</label>
      <input
        id="firstName"
        name="firstName"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.firstName}
      />
      {formik.touched.firstName && formik.errors.firstName ? (
        <div>{formik.errors.firstName}</div>
      ) : null}

      <label htmlFor="lastName">Last Name</label>
      <input
        id="lastName"
        name="lastName"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.lastName}
      />
      {formik.touched.lastName && formik.errors.lastName ? (
        <div>{formik.errors.lastName}</div>
      ) : null}

      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
      />
      {formik.touched.email && formik.errors.email ? (
        <div>{formik.errors.email}</div>
      ) : null}

      <button type="submit">Submit</button>
    </form>
  );
};