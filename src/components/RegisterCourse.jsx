import { useState } from "react";

export default function RegisterCourse({ onAdd }) {

    const [name, setName] = useState("");
    const [credits, setCredits] = useState(0);
    const [grade, setGrade] = useState(5);
    const [attending, setAttending] = useState(false);
    const [difficulty, setDifficulty] = useState("Easy");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (name.trim() === "" || grade < 5 || grade > 10) {
            alert("Invalid input!");
            return;
        }

        const newCourse = {
            id: Date.now(),
            name,
            credits,
            grade,
            attending,
            difficulty
        };

        onAdd(newCourse);
    };

    return (
        <form onSubmit={handleSubmit}>

            <input
                placeholder="Course name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <input
                type="number"
                placeholder="Credits"
                value={credits}
                onChange={(e) => setCredits(Number(e.target.value))}
            />

            <input
                type="number"
                placeholder="Grade (5-10)"
                value={grade}
                onChange={(e) => setGrade(Number(e.target.value))}
            />

            <label>
                Attending:
                <input
                    type="checkbox"
                    checked={attending}
                    onChange={(e) => setAttending(e.target.checked)}
                />
            </label>

            <select
                value={difficulty}
                onChange={(e) => setDifficulty(e.target.value)}
            >
                <option>Easy</option>
                <option>Moderate</option>
                <option>Hard</option>
            </select>

            <button type="submit">Register</button>

        </form>
    );
}