
import StudentCard from "./StudentCard";
import "./StudentList.css"; 

function StudentList({ students }) {
  return (
    <div className="student-list">
      {students.map((student, index) => (
        <StudentCard key={index} name={student.name} major={student.major} year={student.year} />
      ))}
    </div>
  );
}

export default StudentList;
