import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function LoginForm2(){
    const [values,setValues] = useState({
        firstName : '',
        lastName:'',
        email:''
    });
    const [submitted,setSubmitted] = useState(false)

    const handleFirstName = e =>{
        setValues({...values,firstName:e.target.value})
    }

    const handleLastName = e =>{
        setValues({...values,lastName:e.target.value})
    }

    const handleEmail = e =>{
        setValues({...values,email:e.target.value})
    }

    const handleSubmit = e =>{
        e.preventDefault();
        setSubmitted(true);
        alert(`values : ${values.firstName} - ${values.lastName} - ${values.email}`)

    }

    return (
        <>
            <form>
                {submitted ? <div className="btn btn-success">Thank you for submitting the form</div> : null }
               <div>
                <div>
               <label>First Name:</label>
                <input 
                type="text" 
                placeholder="Enter First Name"
                name="firstName"
                value={values.firstName}
                onChange={handleFirstName}
                />
                {submitted && !values.firstName ? <span className="btn btn-danger">Please enter the first name</span> : null}
                </div>
                <br />
                <div>
                <label>Last Name:</label>
                <input 
                type="text" 
                placeholder="Enter Last Name"
                name="lastName"
                value={values.lastName}
                onChange={handleLastName}
                />
                {submitted && !values.lastName ? <span className="btn btn-danger">Please enter the last name</span>:null}
                </div>
                <br />
                <label>Email:</label>
                <input 
                type="text" 
                placeholder="Enter Email"
                name="email"
                value={values.email}
                onChange={handleEmail}
                />
                {submitted && !values.email ? <span className="btn btn-danger">Please enter the email</span>:null}
               </div>
               <button onClick={handleSubmit}>Submit</button>
            </form>
        </>
    )
}

export default LoginForm2;