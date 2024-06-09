import React from 'react';
import {Formik,Form,Field,ErrorMessage} from 'formik';
import * as Yup from 'yup';
import 'bootstrap/dist/css/bootstrap.min.css'
import TextError from './TextError';

const initialValues = {
    name:'',
    email:'',
    channel:'',
    comments:'',
    address:'',
    //nested objects (name attribute should be social.facebook and social.instagram)
    social:{
        facebook:'',
        instagram:''
    },
    //Arrays:
    phoneNumbers:['','']
}

const onSubmit = values =>{
    console.log('Form data',values);
}

const validationSchema = Yup.object({
    name:Yup.string().required('Name field is required!'),
    email:Yup.string().email('Invalid Email!!').required('Email Field is required!!'),
    channel:Yup.string().required('Channel field is required!!'),
    comments:Yup.string().required('Comments is required!!'),
    address:Yup.string().required('Address is required!!'),
    social:Yup.object().shape({
        facebook:Yup.string().required('Facebook is required!!'),
        instagram:Yup.string().required('Instagram is required!!')
    })
})


function CustomForm() {
    return (
        <Formik 
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
        >
            {/* Form is having the onsubmit properties with it */}
            <Form>
                <h2>Registration Form</h2>
                <div>
                    <label htmlFor='name'>Name:</label>
                    <Field type='text' name='name' id='name'/>
                    <ErrorMessage name='name' component={TextError}/>
                </div>
                <div>
                    <label htmlFor='email'>Email:</label>
                    <Field type='email' name='email' id='email'/>
                    <ErrorMessage name='email'>
                        {
                            (errorMessage)=>{
                                return <div className='btn btn-warning'>{errorMessage}</div>
                            }
                        }
                    </ErrorMessage>
                </div>
                <div>
                    <label htmlFor='channel'>Channel:</label>
                    <Field type='text' name='channel' id='channel'/>
                    <ErrorMessage name='channel'>
                        {
                            (errorMsg)=>{
                                return <div className='btn btn-warning'>{errorMsg}</div>
                            }
                        }
                    </ErrorMessage>
                </div>

                <div>
                    <label htmlFor='comments'>Comments:</label>
                    <Field as='textarea' type='text' name='comments' id='comments'/>
                    <ErrorMessage name='comments'>
                        {
                            (errorMsg) =>{
                                return <div className='btn btn-warning'>{errorMsg}</div>
                            }
                        }
                    </ErrorMessage>
                </div>

                <div>
                    <label htmlFor='address'>Address:</label>
                    <Field name='address'>
                    {
                        //Using render props for handling the field
                        (props) =>{
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
                           const {field,form,meta} = props
                            //console.log('Rendering props',props);
                            return(
                               <>
                                 <input type='text' id='address' {...field}/>
                                 {
                                    meta.touched && meta.error ? <div className='btn btn-warning'>{meta.error}</div>:null
                                 }
                               </>
                            )
                        }
                    }
                    </Field>
                </div>

                <div>
                    <label htmlFor='facebook'>Facebook Profile:</label>
                    <Field type='text' name='social.facebook' id='facebook'/>
                    <ErrorMessage name='social.facebook'>
                        {
                            (errorMsg)=>{
                                return <div className='btn btn-warning'>{errorMsg}</div>
                            }
                        }
                    </ErrorMessage>
                </div>

                <div>
                    <label htmlFor='instagram'>Instagram Profile:</label>
                    <Field type='text' name='social.instagram' id='instagram'/>
                    <ErrorMessage name='social.instagram'>
                    {
                            (errorMsg)=>{
                                return <div className='btn btn-warning'>{errorMsg}</div>
                            }
                        }
                    </ErrorMessage>
                </div>

                <div>
                    <label htmlFor='primaryPh'>phoneNumbers (Primary):</label>
                    <Field type='text' id='primaryPh' name="phoneNumbers[0]"/>
                    
                </div>

                <div>
                    <label htmlFor='secPhone'>phoneNumbers (alternate):</label>
                    <Field type='text' id='secPhone' name="phoneNumbers[1]"/>
                </div>

                <button type='submit'>Submit</button>
            </Form>
        </Formik>
    )
}

export default CustomForm;