import React from 'react';
import {Formik,Form,Field,ErrorMessage} from 'formik';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as Yup from "yup";

const initialValues = {
    name:'',//we can define the values
    email:'',
    channel:''
}

const onSubmit = values =>{
    console.log('Form data',values);
}

const validate = values =>{
    let errors = {}
             
    if(!values.name){
        errors.name = "This field is required!"
    }

    if(!values.channel){
        errors.email = "This field is required!"
    }else if(!/^[a-z0-9]+@[a-z]+.[a-z]{2,3}$/.test(values.email)){
        errors.email = "Invalid Email"
    }

    if(!values.channel){
        errors.channel = "This field is required!"
    }

    return errors;
}

const validationSchema = Yup.object({
    name:Yup.string().required('The field is required'),
    email:Yup.string().email('Invalid email!!').required('The field is required!'),
    channel:Yup.string().required('The field is required!')
})

function Form2() {
    return (
        <Formik 
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
        >
            {/* <Form> component has onSubmit method for submiting the forms */}
            <Form>
            <h2>Registration Form in React</h2>
            <div>
                <label htmlFor='name'>Name:</label>
                <Field 
                type='text' 
                id='name' 
                name='name'
                // onChange={formik.handleChange}
                // onBlur={formik.handleBlur}
                // value={formik.values.name}
                //{...formik.getFieldProps('name')}
                />
                <ErrorMessage name='name'/>
            </div>
            <div>
                <label htmlFor='email'>Email:</label>
                <Field 
                type='text' 
                id='email' 
                name='email'
                // //When the field is touched and didn't interact and it shows the error messages after clicking outside the field in the browser window
                // onBlur={formik.handleBlur}
                // onChange={formik.handleChange}
                // onBlur={formik.handleBlur}
                // value={formik.values.email}
                // {...formik.getFieldProps('email')}
                />
               <ErrorMessage name='email'/>
            </div>
            <div>
                <label htmlFor='channel'>Channel:</label>
                <Field 
                type='text' 
                id='channel' 
                name='channel'
                // onChange={formik.handleChange}
                // onBlur={formik.handleBlur}
                // value={formik.values.channel}
                // {...formik.getFieldProps('channel')}
                />
               <ErrorMessage name='channel'/>
            </div>
            <button type='submit' className='btn btn-primary'>Submit</button>
            </Form>
        </Formik>
    )
}

export default Form2;
