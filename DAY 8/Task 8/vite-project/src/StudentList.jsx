import React, { useState } from "react";
import StudentCard from "./StudentCard";
import "./StudentList.css"; 

function StudentList() {
  
  const [students, setStudents] = useState([
    { id: 1, name: "Rohith", major: "Mathematics", year: "Freshman" },
    { id: 2, name: "Rahul", major: "Physics", year: "Sophomore" },
    { id: 3, name: "Sanjay", major: "Computer Science", year: "Junior" },
  ]);

 
  const [name, setName] = useState("");
  const [major, setMajor] = useState("");
  const [year, setYear] = useState("");

  
  const addStudent = () => {
    if (name && major && year) {
      const newStudent = {
        id: students.length + 1,
        name,
        major,
        year,
      };
      setStudents([...students, newStudent]);
      setName("");
      setMajor("");
      setYear("");
    }
  };


  const removeStudent = (id) => {
    setStudents(students.filter((student) => student.id !== id));
  };

  return (
    <div className="student-list-container">
      {}
      <div className="student-form">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Major"
          value={major}
          onChange={(e) => setMajor(e.target.value)}
        />
        <select value={year} onChange={(e) => setYear(e.target.value)}>
          <option value="">Select Year</option>
          <option value="Fresher">Fresher</option>
          <option value="Sophomore">Sophomore</option>
          <option value="Junior">Junior</option>
          <option value="Senior">Senior</option>
        </select>
        <button onClick={addStudent}>Add Student</button>
      </div>

      {}
      <div className="student-list">
        {students.length > 0 ? (
          students.map((student) => (
            <StudentCard
              key={student.id}
              name={student.name}
              major={student.major}
              year={student.year}
              onRemove={() => removeStudent(student.id)}
            />
          ))
        ) : (
          <p>No students available</p>
        )}
      </div>
    </div>
  );
}

export default StudentList;
