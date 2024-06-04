function Item({name,isPacked}){
    // if(isPacked){
    //     return(
    //             <li>Items {name} packed (:)</li>
    //         )
    // }else{
    //     return <li>Items to be packed : {name}</li>
    // }
    return(
    <li>
       {isPacked ? (<del>name + ':()'</del>) : (name)}
    </li>
    );
    
}

export default function PackingList(){
    return(
        <>
        <h2>Fruits list</h2>
        <ul>
            <Item 
            name="Banana"
            isPacked={true}
            />
             <Item 
            name="Apple"
            isPacked={false}
            />
             <Item 
            name="Mango"
            isPacked={true}
            />
        </ul>
        </>
    )
}




