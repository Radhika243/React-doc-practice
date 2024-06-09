import React,{useState} from "react";
import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import * as Yup from "yup";
import "bootstrap/dist/css/bootstrap.min.css";
import TextError from "./TextError";

const initialValues = {
  name: "",
  email: "",
  channel: "",
  comments: "",
  address: "",
  //nested objects (name attribute should be social.facebook and social.instagram)
  social: {
    facebook: "",
    instagram: "",
  },
  //Arrays:
  phoneNumbers: ["", ""],
  //Field Array
  phNumbers: [""],
};

//For loading the saved data
/* Copy the initial values and update the values
   import useState from React and set the initial values to null
   add a button (Load saved data) and set the savedData as value
   Add formData for initial values in the initialValues prop along with initial values, if there is no saved data , then it will load the initialStateValues for setting
   Add enableReinitialise prop for enabling the new values in to the form
*/
const savedData = {
    name: "Jai Shree Ram",
    email: "ram@gmail.com",
    channel: "ramayana",
    comments: "Beautiful book",
    address: "Ayodhya",
    //nested objects (name attribute should be social.facebook and social.instagram)
    social: {
      facebook: "ram",
      instagram: "ram",
    },
    //Arrays:
    phoneNumbers: ["", ""],
    //Field Array
    phNumbers: [""],
  };

const onSubmit = (values,onSubmitProps) => {
  console.log("Form data", values);
  console.log("Submit props",onSubmitProps);
  onSubmitProps.setSubmitting(false)//isSubmitting to false
  onSubmitProps.resetForm()// The form will be resetting once the form is submitting
};

const validationSchema = Yup.object({
  name: Yup.string().required("Name field is required!"),
  email: Yup.string()
    .email("Invalid Email!!")
    .required("Email Field is required!!"),
  channel: Yup.string().required("Channel field is required!!"),
  //comments:Yup.string().required('Comments is required!!'),
  address: Yup.string().required("Address is required!!"),
  social: Yup.object().shape({
    facebook: Yup.string().required("Facebook is required!!"),
    instagram: Yup.string().required("Instagram is required!!"),
  }),
});

const validateComments = (value) => {
  let error;
  if (!value) {
    error = "Comments is required field";
  }
  return error;
};

function FieldArrayForm() {
    const [formValues, setFormValues] = useState(null)
  return (
    <Formik
      initialValues={formValues || initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
      validateOnChange={false} //by default the value will be true
      //validateOnBlur={false}//By adding this prop , the validations will not work on any fields even though if we didn't enter the values.Use based on use cases
     validateOnMount//Disbles the form until all the fields are entered and when the form is mounting//valid for fields with simple validations
     enableReinitialize//The saved data values are shown to the form
    >
      {(formik) => {
        console.log("Formik components:", formik);
        return (
          <>
            {/* Form is having the onsubmit properties with it */}
            <Form>
              <h2>Registration Form</h2>
              <div>
                <label htmlFor="name">Name:</label>
                <Field type="text" name="name" id="name" />
                <ErrorMessage name="name" component={TextError} />
              </div>
              <div>
                <label htmlFor="email">Email:</label>
                <Field type="email" name="email" id="email" />
                <ErrorMessage name="email">
                  {(errorMessage) => {
                    return (
                      <div className="btn btn-warning">{errorMessage}</div>
                    );
                  }}
                </ErrorMessage>
              </div>
              <div>
                <label htmlFor="channel">Channel:</label>
                <Field type="text" name="channel" id="channel" />
                <ErrorMessage name="channel">
                  {(errorMsg) => {
                    return <div className="btn btn-warning">{errorMsg}</div>;
                  }}
                </ErrorMessage>
              </div>

              <div>
                <label htmlFor="comments">Comments:</label>
                <Field
                  as="textarea"
                  type="text"
                  name="comments"
                  id="comments"
                  validate={validateComments}
                />
                {/* <ErrorMessage name='comments'>
                        {
                            (errorMsg) =>{
                                return <div className='btn btn-warning'>{errorMsg}</div>
                            }
                        }
                    </ErrorMessage> */}
                <ErrorMessage name="comments" component={TextError} />
              </div>

              <div>
                <label htmlFor="address">Address:</label>
                <Field name="address">
                  {
                    //Using render props for handling the field
                    (props) => {
                      /* 
                                field
: 
{name: 'address', value: '', onChange: ƒ, onBlur: ƒ}
form
: 
{values: {…}, errors: {…}, touched: {…}, status: undefined, isSubmitting: false, …}
meta
: 
{value: '', error: undefined, touched: false, initialValue: '', initialTouched: false, …}
[[Prototype]]
: 
Object

                            */
                      const { field, form, meta } = props;
                      //console.log('Rendering props',props);
                      return (
                        <>
                          <input type="text" id="address" {...field} />
                          {meta.touched && meta.error ? (
                            <div className="btn btn-warning">{meta.error}</div>
                          ) : null}
                        </>
                      );
                    }
                  }
                </Field>
              </div>

              <div>
                <label htmlFor="facebook">Facebook Profile:</label>
                <Field type="text" name="social.facebook" id="facebook" />
                <ErrorMessage name="social.facebook">
                  {(errorMsg) => {
                    return <div className="btn btn-warning">{errorMsg}</div>;
                  }}
                </ErrorMessage>
              </div>

              <div>
                <label htmlFor="instagram">Instagram Profile:</label>
                <Field type="text" name="social.instagram" id="instagram" />
                <ErrorMessage name="social.instagram">
                  {(errorMsg) => {
                    return <div className="btn btn-warning">{errorMsg}</div>;
                  }}
                </ErrorMessage>
              </div>

              <div>
                <label htmlFor="primaryPh">phoneNumbers (Primary):</label>
                <Field type="text" id="primaryPh" name="phoneNumbers[0]" />
              </div>

              <div>
                <label htmlFor="secPhone">phoneNumbers (alternate):</label>
                <Field type="text" id="secPhone" name="phoneNumbers[1]" />
              </div>

              <div>
                <label>Phone Numbers:</label>
                <FieldArray name="phNumbers">
                  {(fieldArrayProps) => {
                    console.log("Field array props", fieldArrayProps);
                    const { push, remove, form } = fieldArrayProps;
                    const { values } = form;
                    const { phNumbers } = values;
                    return (
                      <div>
                        {phNumbers.map((phNumber, index) => {
                          return (
                            <div key={index}>
                              <Field name={`phNumber[${index}]`} />
                              {index > 0 && (
                                <button
                                  type="button"
                                  onClick={() => remove(index)}
                                >
                                  -
                                </button>
                              )}

                              <button type="button" onClick={() => push("")}>
                                +
                              </button>
                            </div>
                          );
                        })}
                      </div>
                    );
                  }}
                </FieldArray>
              </div>

              <button
                type="button"
                onClick={() => formik.validateField("comments")}
              >
                Validate Comments
              </button>
              <button type="button" onClick={() => formik.validateForm()}>
                Validate Form
              </button>
              <button
                type="button"
                onClick={() => formik.setFieldTouched("comments")}
              >
                Set Validate Comments
              </button>
              <button type="button" onClick={() => formik.setTouched({
                name:true,
                email:true,
                address:true,
                social:true
              })}>
                Set Validate Form
              </button>
              {/* dirty -> when the field value changes, the dirty property is applied
              isSubmitting -> the form is currently being submitted or not - 2nd approach (mostly used)
              */}
              {/* <button type="submit" disabled={!(formik.dirty && formik.isValid)}>Submit</button> */}
              <button type="button" onClick={()=>setFormValues(savedData)}>Load Saved Data</button>
              {/* 1st method of resetting the form */}
              <button type="reset">Reset Form</button>
              <button type="submit" disabled={!formik.isValid || formik.isSubmitting}>Submit</button>
            </Form>
          </>
        );
      }}
    </Formik>
  );
}

export default FieldArrayForm;
