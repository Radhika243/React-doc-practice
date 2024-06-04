import users from './MOCK_DATA.json'
import { useState } from 'react'

const Data=()=>{
    const [searchTerm,setSearchTerm] = useState('')
    return(
        <>
            <h1>Search the User</h1>
            <input type="search" name="" id="" placeholder='Search the user' onChange={e=>setSearchTerm(e.target.value)}/>
            
                {
                    users
                    .filter((user)=>{
                        if(searchTerm === ''){
                            return user
                        }else if(user.first_name.toLowerCase().includes(searchTerm.toLowerCase())){
                            return user
                        }
                        else if(user.last_name.toLowerCase().includes(searchTerm.toLowerCase())){
                            return user
                        }
                    })
                    .map((user)=>{
                        return <li key={user.id}>{user.first_name} - {user.last_name}</li>
                    })
                }
           
        </>
    )
}

export default Data;