
import "./StudentCard.css"; 

function StudentCard({ name, major, year, onRemove }) {
  return (
    <div className="student-card">
      <h2>{name}</h2>
      <p><strong>Major:</strong> {major}</p>
      <p><strong>Year:</strong> {year}</p>
      <button className="remove-btn" onClick={onRemove}>Remove</button>
    </div>
  );
}

export default StudentCard;
