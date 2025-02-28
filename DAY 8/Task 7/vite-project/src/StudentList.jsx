import React, { useState } from "react";
import StudentCard from "./StudentCard";
import "./StudentList.css"; 

function StudentList({ students }) {
  const [search, setSearch] = useState("");

  
  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="student-list-container">
      <input
        type="text"
        placeholder="Search students..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-bar"
      />
      <div className="student-list">
        {filteredStudents.length > 0 ? (
          filteredStudents.map((student, index) => (
            <StudentCard
              key={index}
              name={student.name}
              major={student.major}
              year={student.year}
            />
          ))
        ) : (
          <p>No students found</p>
        )}
      </div>
    </div>
  );
}

export default StudentList;
