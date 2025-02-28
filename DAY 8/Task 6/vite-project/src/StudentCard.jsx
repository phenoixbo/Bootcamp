import React from "react";
import "./StudentCard.css"; 

function StudentCard({ name, major, year }) {

  const getBackgroundColor = (year) => {
    switch (year) {
      case "Freshman":
        return "#A8E6A2";
      case "Sophomore":
        return "#F9E79F";
      case "Junior":
        return "#AED6F1"; 
      case "Senior":
        return "#F5B7B1"; 
      default:
        return "#EAEAEA";
    }
  };

  return (
    <div className="student-card" style={{ backgroundColor: getBackgroundColor(year) }}>
      <h2>{name}</h2>
      <p><strong>Major:</strong> {major}</p>
      <p><strong>Year:</strong> {year}</p>
    </div>
  );
}

export default StudentCard;
