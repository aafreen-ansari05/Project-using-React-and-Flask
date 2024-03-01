import React from "react";
import {useEffect,useState} from "react";
import { Formik, Form, Field, ErrorMessage, useFormik } from "formik";
import * as yup from "yup";
import KErrorMessage from "./Components/KErrorMessage";
import axios from 'axios';


const validationSchema = yup.object({
  first_name: yup.string().required("First-Name is Required!"),
  last_name: yup.string().required("Last-Name is Required!"),
  age: yup.number().required("Age is Required")
    .required("Password is Required!"),
  gender: yup.string().required("Gender is required!"),
  date: yup.date().required("Date of Birth is required!"),
  country: yup.string().required("Required!"),
  address: yup.string().required("Address is required!"),
});



const App = () => {
  const [setUser] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/user")
      .then((response) => 
      console.log(setUser(response.user)))
  }, []);
  
  return (
    <div>
      <Formik
    
  
  
        validationSchema={validationSchema}
        initialValues={{
          first_name: "",
          last_name: "",
          age: "",
          gender: "",
          country: "",
          address: "",
          date: ""
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ values }) => (
          <Form>
            <label>First-name : </label>
            <Field name="first_name" type="text" />
            <br />
            <KErrorMessage name="first_name" />
            <br />
            <label>Last-name: </label>
            <Field name="last_name" type="text" />
            <br />
            <KErrorMessage name="last_name" />
            <br />
            <label>Age: </label>
            <Field name="age" type="number"/>
            <br />
            <KErrorMessage name="age" />
            <br />
            <label>Gender: </label>
            <br /> <br />
            <label>Male:</label>
            <Field name="gender" value="male" type="radio" />
            <label>Female:</label>
            <Field name="gender" value="female" type="radio" />
            <br />
            <KErrorMessage name="gender" />
            <br />
            <label>Date:</label>
            <Field name="date" type="date" />
            <br />
            <KErrorMessage name="date" />
            <br />
          
            <label>Country: </label>
            <Field name="country" type="text"/>
            <br />
            <KErrorMessage name="country" />
            <br />
            <label>Address: </label>
            <Field name="address" type="text" />
            <br />
            <KErrorMessage name="address" />
            <br />

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default App;