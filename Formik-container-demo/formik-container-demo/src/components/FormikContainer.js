import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormControl from "./FormControl";

const initialValues = {
  email: "",
  description: "",
  selectOption:"",
  radioButtons:"",
  checkboxOptions:[],
  birthDate:null
};

const dropDownList = [
    {key:'Select an option', value:''},
    {key:'Option 1',value:'option1'},
    {key:'Option 2',value:'option2'},
    {key:'Option 3',value:'option3'},
    {key:'Option 4',value:'option4'},
]

const radioList = [
  {key:'Option 1',value:'Option1'},
  {key:'Option 2',value:'Option2'},
  {key:'Option 3',value:'Option3'},
  {key:'Option 4',value:'Option4'},
]

const checkBoxList = [
  {key:'Option 1',value:'COption1'},
  {key:'Option 2',value:'COption2'},
  {key:'Option 3',value:'COption3'},
  {key:'Option 4',value:'COption4'},
]


const validationSchema = Yup.object({
  email: Yup.string().required("Email is required!"),
  description: Yup.string().required("Description is required!"),
  selectOption: Yup.string().required("Select an option!"),
  radioButtons:Yup.string().required('Choose an option!'),
  checkboxOptions:Yup.array().required('required'),
  birthDate:Yup.date().required('Date is required!').nullable()
 
  
});

const onSubmit = (values) => {
  console.log("Form data values", values);
};
function FormikContainer() {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => (
        <Form>
        
          <h2>Registration Form</h2>
          <FormControl
            control="input"
            type="email"
            label="Email"
            name="email"
          />

          <FormControl 
            control="textarea"
            type="text"
            label="Description"
            name="description"
          />

          <FormControl 
            control="select"
            name="selectOption"
            label="Select an option"
            options={dropDownList}
          />

          <FormControl 
            control="radio"
            name="radioButtons"
            label="Choose the option"
            options={radioList}
          />

          <FormControl 
           control="checkbox"
           name="checkboxOptions"
           label="Choose the options"
           options={checkBoxList}
          />

          <FormControl 
          control='date'
          label='Pick a date'
          name="birthDate"
          />

          
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
}

export default FormikContainer;
