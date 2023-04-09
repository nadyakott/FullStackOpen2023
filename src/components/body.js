import Course from "./course";

export default function Courses({courses}) {
    return <div>
        <h1>Web developer curriculum</h1>
            {courses.map(course => <Course key={course.id} title={course.name} parts={course.parts}/>)}
    </div>
}