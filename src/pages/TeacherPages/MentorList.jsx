import React from "react";
import { Link } from "react-router-dom";

// import { Link } from "react-router-dom";

function MentorList({ tdata, deleteTeacher }) {
  return (
    <>
      <tr>
        <td>{tdata.employe_id}</td>
        <td>{tdata.name}</td>
        <td>{tdata.subject}</td>
        <td>{tdata.salary}</td>
        <td>
          <Link
            className="btn btn-primary btn-sm me-1"
            to={`/teacher/${tdata.employe_id}`}
          >
            View
          </Link>
          <Link
            className="btn btn-success btn-sm me-1"
            to={`/editteacher/${tdata.employe_id}`}
          >
            Edit
          </Link>
          <button
            className="btn btn-danger btn-sm me-1"
            to={`/teacher/${tdata.employe_id}`}
            onClick={() => deleteTeacher(tdata.employe_id)}
          >
            Delete
          </button>
        </td>
      </tr>
    </>
  );
}

export default MentorList;
