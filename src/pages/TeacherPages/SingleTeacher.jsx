import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function SingleTeacher({ teacherdata }) {
  const params = useParams();
  const Index = teacherdata.findIndex((item) => item.employe_id == params.id);
  const details = teacherdata[Index];

  return (
    <div className="container py-5 h-100 ">
      <div className="row d-flex justify-content-center align-items-center h-100 ">
        <div className="col col-xl-9">
          <h2 className="m-auto" style={{ textAlign: "center" }}>
            TEACHER DETAILS
          </h2>
          <div className="card m-auto mt-3" style={{ width: "30rem" }}>
            <div className="card-header text-center text-uppercase">
              <strong>{details.name}</strong>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">ID : {details.employe_id}</li>
              <li className="list-group-item">Subject : {details.subject}</li>
              <li className="list-group-item">
                Experience : {details.experience}
              </li>
              <li className="list-group-item">Salary : {details.salary}</li>
              <li className="list-group-item">Contact: {details.contact}</li>
              <li className="list-group-item">Address : {details.address}</li>
            </ul>
          </div>
          <div className="d-sm-flex  justify-content-end mt-3">
            <Link to="/teacher" className="btn btn-sm btn-primary shadow-sm ">
              BACK
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleTeacher;
