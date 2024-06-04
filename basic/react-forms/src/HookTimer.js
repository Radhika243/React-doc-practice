import React,{useState,useEffect,useRef} from 'react'

function HookTimer(props) {
    const [timer,setTimer] = useState(0);
    let intervalRef = useRef()
    //const [btnClick,setBtnClick] = useState(false)
    //mimic componentDidmount and componentwillunmount
    useEffect(()=>{
        intervalRef.current = setInterval(()=>{
            setTimer(prevTimercount =>prevTimercount + 1)
        },1000)
        return () =>{
            clearInterval(intervalRef.current)
        }
    },[])
    return (
        <>
            Timer : {timer}
            {/* when we try to clear the interval, interval is not defined error is shown on the UI, so here useRef comes to Rescus , create a ref and give the current property access along with it while creating and clearing the ref */}
            <button onClick={()=>clearInterval(intervalRef.current)}>Clear timer</button>
        </>
    )
}

export default HookTimer;
