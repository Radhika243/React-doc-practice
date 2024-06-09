import React from 'react';
import {useFormik} from 'formik';
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

function Form() {
    const formik = useFormik({
        initialValues:initialValues,
        onSubmit:onSubmit,
        //values corresponds to the name attribute of form or initial state
        //validate: validate
        validationSchema:validationSchema

    })//returns the object
    console.log('Form details',formik.values)
    console.log('Form details errors',formik.errors)
    //Touched property displays the visited fields and shows the error msgs based on the touched property
    console.log('Form details touched',formik.touched);
    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
            <h2>Registration Form in React</h2>
            <div>
                <label htmlFor='name'>Name:</label>
                <input 
                type='text' 
                id='name' 
                name='name'
                // onChange={formik.handleChange}
                // onBlur={formik.handleBlur}
                // value={formik.values.name}
                {...formik.getFieldProps('name')}
                />
                {formik.touched.name && formik.errors.name ? <div className='btn btn-danger'>{formik.errors.name}</div>:null}
            </div>
            <div>
                <label htmlFor='email'>Email:</label>
                <input 
                type='text' 
                id='email' 
                name='email'
                // //When the field is touched and didn't interact and it shows the error messages after clicking outside the field in the browser window
                // onBlur={formik.handleBlur}
                // onChange={formik.handleChange}
                // onBlur={formik.handleBlur}
                // value={formik.values.email}
                {...formik.getFieldProps('email')}
                />
                {formik.touched.email && formik.errors.email ? <div className='btn btn-danger'>{formik.errors.email}</div>:null}
            </div>
            <div>
                <label htmlFor='channel'>Channel:</label>
                <input 
                type='text' 
                id='channel' 
                name='channel'
                // onChange={formik.handleChange}
                // onBlur={formik.handleBlur}
                // value={formik.values.channel}
                {...formik.getFieldProps('channel')}
                />
                {formik.touched.channel && formik.errors.channel ? <div className='btn btn-danger'>{formik.errors.channel}</div> : null}
            </div>
            <button type='submit' className='btn btn-primary'>Submit</button>
            </form>
        </div>
    )
}

export default Form;
