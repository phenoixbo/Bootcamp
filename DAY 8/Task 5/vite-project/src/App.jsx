import './App.css'
import StudentList from "./StudentList";

function App() {
  const students = [
    { name: "Alice Johnson", major: "Mathematics", year: "Freshman" },
    { name: "Bob Williams", major: "Physics", year: "Junior" },
    { name: "Charlie Brown", major: "Computer Science", year: "Sophomore" },
  ];

  return (
    <div>
      <h1 className='h1'>Student List</h1>
      <StudentList students={students} />
    </div>
  );
}

export default App;
