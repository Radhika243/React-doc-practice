import React,{ useState} from 'react';
import FancyText from './FancyText';
import Quote from './Quote'

export default function InspirationalQuote({children}){
    const [index,setIndex] = useState(0);
    const quote = Quote[0];
    const next = () => setIndex((index + 1) % quote.length);


return(
    <>
    <p>The quote is : </p>
    <FancyText text={quote}/>
    <button onClick={next}>Generate quote!</button>
    {children}
    </>
)
}