import React from "react";
import "./App.css";

// Header Component
function Header() {
  return (
    <h1 className="header">
      Student Management System
    </h1>
  );
}

// StudentProfile Component
function StudentProfile(props) {
  return (
    <div className="student-profile">
      <p><strong>Name:</strong> {props.name}</p>
      <p><strong>Department:</strong> {props.department}</p>
      <p><strong>Year:</strong> {props.year}</p>
    </div>
  );
}

// Footer Component
function Footer() {
  return (
    <footer className="footer">
      © 2026 Student Management System
    </footer>
  );
}

// Main App Component
function App() {

  // Student 1 details
  let student1Name = "Anu";
  let student1Department = "CSE";
  let student1Year = "3rd Year";

  // Student 2 details
  let student2Name = "Bala";
  let student2Department = "Computer Science";
  let student2Year = "3rd Year";

  return (
    <div>
      <Header />

      <h2>Student 1</h2>

      <StudentProfile
        name={student1Name}
        department={student1Department}
        year={student1Year}
      />

      <h2>Student 2</h2>

      <StudentProfile
        name={student2Name}
        department={student2Department}
        year={student2Year}
      />

      <Footer />
    </div>
  );
}

export default App;