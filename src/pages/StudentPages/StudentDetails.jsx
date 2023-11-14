import React from "react";
import StudentList from "./StudentList";
import { Link } from "react-router-dom";

const StudentDetails = ({ studentsData, setstudentsData }) => {
  const DeleteStudent = (roll_no) => {
    const confirm = window.confirm("Do you want to delete?");
    console.log(roll_no);
    if (confirm) {
      setstudentsData(studentsData.filter((item) => item.roll_no !== roll_no));
    }
  };
  return (
    <div className="card shadow mb-4">
      <div className="card-header py-3 d-sm-flex  justify-content-between mb-4">
        <h6 className="m-0 font-weight-bold text-primary">Students Records</h6>
        <Link
          to="/createstudent"
          className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
        >
          Add Student Details
        </Link>
      </div>
      <div className="card-body">
        <div className="table-responsive">
          <table
            className="table table-bordered border-end-0"
            id="dataTable"
            width="100%"
            cellSpacing="0"
          >
            <thead>
              <tr>
                <th>Roll no</th>
                <th>Name</th>
                <th>Class</th>
                <th>Contact</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {studentsData.map((st, index) => (
                <StudentList
                  key={index}
                  sdata={st}
                  deleteStudent={DeleteStudent}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default StudentDetails;
