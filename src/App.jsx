import { useCallback, useState, useRef } from 'react';
import StudentCard from "./components/StudentCard.jsx";
import RegisterCourse from "./components/RegisterCourse.jsx";
import './App.css';

function App() {

  const initialCourses = [
    {
      id: 1,
      name: "Web Development",
      credits: 6,
      grade: 90,
      attending: true,
      difficulty: "Moderate"
    },
    {
      id: 2,
      name: "Databases",
      credits: 5,
      grade: 45,
      attending: false,
      difficulty: "Hard"
    },
    {
      id: 3,
      name: "Math",
      credits: 4,
      grade: 88,
      attending: true,
      difficulty: "Easy"
    }
  ];

  const [courses, setCourses] = useState(initialCourses);

  // useRef (required feature)
  const renderCount = useRef(0);
  renderCount.current++;

  // useCallback (required feature)
  const addCourse = useCallback((course) => {
    setCourses((prev) => [...prev, course]);
  }, []);

  return (
      <div>
        <h1>Vesa Zhuta</h1>
        <h2>132518</h2>

        <p>Render count: {renderCount.current}</p>

        <RegisterCourse onAdd={addCourse} />

        {courses.map((course) => (
            <StudentCard key={course.id} course={course} />
        ))}
      </div>
  );
}

export default App;