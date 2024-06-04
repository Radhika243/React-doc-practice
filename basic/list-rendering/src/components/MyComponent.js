import {useState} from "react"

const MyComponent = ({myProp}) =>{
    const [state] = useState(myProp);
    if(state === myProp){
        return null;
    }else{
        return state;
    }
}

export default function App1(){
    <>
    <MyComponent myProp="Hello" />
    <MyComponent myProp={2}/>
    <MyComponent myProp={{greet:"Hello"}}/>
    {/* <MyComponent myProp={Hello}/> */}
    </>
}