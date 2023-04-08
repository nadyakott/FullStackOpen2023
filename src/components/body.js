import Course from "./course";

export default function Courses({courses}) {
    return <div>
        <h1>Web developer curriculum</h1>
        <table>
            {courses.map(course => <Course title={course.name} parts={course.parts}/>)}
        </table>
    </div>
}