export default function StudentCard({ course }) {
    return (
        <div style={{ border: "1px solid gray", padding: "10px", margin: "10px" }}>

            <h3>{course.name}</h3>

            <p>Credits: {course.credits}</p>
            <p>Grade: {course.grade}</p>
            <p>Attending: {course.attending ? "Yes" : "No"}</p>
            <p>Difficulty: {course.difficulty}</p>

            {/* At risk condition (STRICT) */}
            {course.grade < 50 && course.attending === false && (
                <p style={{ color: "red" }}>⚠ At risk</p>
            )}

            {/* Distinction condition */}
            {course.grade >= 85 && (
                <p style={{ color: "green" }}>🏆 Eligible for distinction</p>
            )}

        </div>
    );
}