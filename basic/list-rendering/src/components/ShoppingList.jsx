import React,{useState} from 'react';

function ShoppingList(){
    const [count,setCount] = useState(0)
    const products = [
        {id:1,isFruit:true,name:'Apple'},
        {id:2,isFruit:true,name:'Mango'},
        {id:3,isFruit:false,name:'Tomato'}
    ];
    const listProducts = products.map((product)=>{
        return <li 
        key={product.id}
        style={{color:product.isFruit?'magenta':'blue'}}
        >{product.name}</li>
    })
    return(
        <>
             <h2>{listProducts}</h2>
             <h4>Count : {count}</h4>
             <button onClick={()=>setCount(count + 1)}>Increment</button>
        </>
    )
}

export default ShoppingList;