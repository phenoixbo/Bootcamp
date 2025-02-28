
import "./StudentCard.css"; 


function StudentCard({ name, major, year }) {
  return (
    <div className="student-card">
      <h2>{name}</h2>
      <p><strong>Major:</strong> {major}</p>
      <p><strong>Year:</strong> {year}</p>
    </div>
  );
}

export default StudentCard;
