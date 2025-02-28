
import StudentList from "./StudentList";

function App() {
  const students = [
    { name: "Alice Johnson", major: "Mathematics", year: "Freshman" },
    { name: "Bob Williams", major: "Physics", year: "Sophomore" },
    { name: "Charlie Brown", major: "Computer Science", year: "Junior" },
    { name: "David Lee", major: "Engineering", year: "Senior" },
  ];

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Student List</h1>
      <StudentList students={students} />
    </div>
  );
}

export default App;
