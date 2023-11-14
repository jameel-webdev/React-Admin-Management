import React from "react";
import MentorList from "./MentorList";
import { Link } from "react-router-dom";

const TeacherDetails = ({ teachersData, setteachersData }) => {
  const DeleteTeacher = (employe_id) => {
    const confirm = window.confirm("Do you want to delete?");
    if (confirm) {
      setteachersData(
        teachersData.filter((item) => item.employe_id !== employe_id)
      );
    }
  };
  return (
    <div className="card shadow mb-4">
      <div className="card-header py-3 d-sm-flex  justify-content-between mb-4">
        <h6 className="m-0 font-weight-bold text-primary">Teachers Records</h6>
        <Link
          to="/createteacher"
          className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
        >
          Add Teacher Details
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
                <th>Id</th>
                <th>Name</th>
                <th className="">Subject</th>
                <th>Salary</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {teachersData.map((dt, index) => (
                <MentorList
                  key={index}
                  tdata={dt}
                  deleteTeacher={DeleteTeacher}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TeacherDetails;
