import { useState } from "react";

function LoginForm(){
    const [name,setName] = useState('');
    const [password,setPassword] = useState('');
    const [email,setEmail] = useState('');

    const handleSubmit = e =>{
        e.preventDefault();
        alert(`Name: ${name} \nPassword:${password} \nEmail:${email}`);
    }

    return(
        <>
        <form onSubmit={handleSubmit}>
           <div>
           <label>Username:</label>
            <input type="text" 
            placeholder="Enter name...."
            value={name} 
            onChange={e=>setName(e.target.value)}
            />
            {" "}
            <br />
             <label>Password:</label>
            <input type="password" 
            placeholder="Enter the Password"
            value={password} 
            onChange={e=>setPassword(e.target.value)}
            />
            {" "}
            <br />
            <label>Email:</label>
            <input type="email" 
            placeholder="Enter the email"
            value={email}
            onChange={e=>setEmail(e.target.value)}
            
            />
           </div>
           <button type="submit">Submit</button>
        </form>
        </>
    )
}

export default LoginForm;