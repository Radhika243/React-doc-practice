import { useState } from "react";
import {useForm} from 'react-hook-form';

function Form(){
    const {register,handleSubmit,errors} = useForm();
    const [data1,setData1] = useState()
    const onsubmit = (data) =>{
        setData1(data)
        console.log(data);
    }
    return(
        <div>
            <form onSubmit={handleSubmit(onsubmit)}>
                <pre>{JSON.stringify(data1,undefined,2)}</pre>
                <h1>Register Form</h1>
               <div>
                 <label>Username:</label>
                 <input type="text" name="username" placeholder="Enter the username" ref={register}/>
               </div>
               <p>{}</p>
               <div>
               <label>Email:</label>
                 <input type="email" name="email" placeholder="Enter the email" ref={register}/>
               </div>
               <div>
               <label>Password:</label>
                 <input type="password" name="password" placeholder="Enter the password" ref={register}/>
               </div>
               <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Form;