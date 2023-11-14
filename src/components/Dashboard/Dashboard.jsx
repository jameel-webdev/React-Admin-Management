import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="mt-5 d-flex flex-column justify-content-center align-items-center gap-5">
      <h2 className="text-center">TEACHER AND STUDENT MANAGEMENT</h2>
      <Card style={{ width: "70%" }}>
        <Card.Body className="text-center">
          <Card.Title>Teachers Records</Card.Title>
          <Card.Text>
            Teacher details list: Names, subjects taught, contacts, etc..
            <Link to="/teacher"> Click here</Link>
          </Card.Text>
        </Card.Body>
      </Card>
      <Card style={{ width: "70%" }}>
        <Card.Body className="text-center">
          <Card.Title>Students Records</Card.Title>
          <Card.Text>
            Students details list: Names, class, contacts , etc..
            <Link to="/student"> Click here</Link>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Dashboard;
