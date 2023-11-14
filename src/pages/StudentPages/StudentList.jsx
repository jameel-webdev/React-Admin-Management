import React from "react";
import { Link } from "react-router-dom";

function StudentList({ sdata, deleteStudent }) {
  return (
    <>
      <tr>
        <td>{sdata.roll_no}</td>
        <td>{sdata.name}</td>
        <td>{sdata.standard}</td>
        <td>{sdata.contact}</td>
        <td>
          <Link
            className="btn btn-primary btn-sm me-1"
            to={`/student/${sdata.roll_no}`}
          >
            View
          </Link>
          <Link
            className="btn btn-success btn-sm me-1"
            to={`/editstudent/${sdata.roll_no}`}
          >
            Edit
          </Link>
          <button
            className="btn btn-danger btn-sm me-1"
            onClick={() => deleteStudent(sdata.roll_no)}
          >
            Delete
          </button>
        </td>
      </tr>
    </>
  );
}

export default StudentList;
