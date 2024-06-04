export default function FancyText({text,title}){
    return title 
        ? <h1>{text}</h1>:
        <h3>{text}</h3>
}