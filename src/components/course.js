import Header from "./header";
import Part from "./part";

export default function Course({title, parts}) {

    return <div>
        <Header text={title}/>
        <table>
            {parts.map(part => <Part name={part.name} exercise={part.exercises} id={part.id}/>)}
        </table>
        <h3>total of {parts.map(part => part.exercises).reduce((a,b)=> a+b,0)} exercises</h3>
    </div>

}