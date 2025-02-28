
import StudentCard from "./StudentCard";

function App() {
  return (
    <div className="container">
      <StudentCard name="Alice Johnson" major="Mathematics" year="Freshman" />
      <StudentCard name="Bob Williams" major="Physics" year="Junior" />
    </div>
  );
}

export default App;
