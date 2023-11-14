import "./App.css";
import { Routes, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import dataContext from "./components/Context/UserContext";
import Dashboard from "./components/Dashboard/Dashboard";
import TeacherDetails from "./pages/TeacherPages/TeacherDetails";
import Portal from "./pages/Portal";
import StudentDetails from "./pages/StudentPages/StudentDetails";
import SingleStudent from "./pages/StudentPages/SingleStudent";
import SingleTeacher from "./pages/TeacherPages/SingleTeacher";
import EditStudent from "./pages/StudentPages/EditStudent";
import EditTeacher from "./pages/TeacherPages/EditTeacher";
import CreateStudent from "./pages/StudentPages/CreateStudent";
import CreateTeacher from "./pages/TeacherPages/CreatetTeacher";

function App() {
  const [studentsData, setstudentsData] = useState([
    {
      roll_no: 11,
      name: "James",
      standard: 10,
      mother_name: "Anna",
      father_name: "Robert",
      contact: "952654****",
      address: "INDIANE",
    },
    {
      roll_no: 14,
      name: "Shelby",
      standard: 5,
      mother_name: "Cilia",
      father_name: "Thomas",
      contact: "985654****",
      address: "MICHIGAN",
    },
    {
      roll_no: 20,
      name: "Charlie",
      standard: 8,
      mother_name: "Darcy",
      father_name: "Robin",
      contact: "955454****",
      address: "VIRGINIA",
    },
    {
      roll_no: 23,
      name: "Esther",
      standard: 5,
      mother_name: "Mary",
      father_name: "Jack",
      contact: "985654****",
      address: "ALASKA",
    },
    {
      roll_no: 43,
      name: "Susume",
      standard: 5,
      mother_name: "Terasa",
      father_name: "Wilson",
      contact: "985654****",
      address: "TEXAS",
    },
  ]);
  const [teachersData, setteachersData] = useState([
    {
      employe_id: 1,
      name: "Rosy",
      subject: "English",
      experience: "10 years",
      salary: 30000,
      contact: "922634****",
      address: "New York",
    },
    {
      employe_id: 2,
      name: "Vicktor",
      subject: "Applied Maths",
      experience: "3 years",
      salary: 30000,
      contact: "852654****",
      address: "Chikago",
    },
    {
      employe_id: 3,
      name: "Samuel",
      subject: "Art",
      experience: "8 years",
      salary: 40000,
      contact: "978654****",
      address: "Swizz",
    },
    {
      employe_id: 4,
      name: "Sassy Lou",
      subject: "Quantum Physics",
      experience: "2 years",
      salary: 35000,
      contact: "912654****",
      address: "Mexico",
    },
    {
      employe_id: 5,
      name: "Vijaykumar",
      subject: "Language Tamil",
      experience: "8 years",
      salary: 55000,
      contact: "912654****",
      address: "Chennai",
    },
  ]);
  return (
    <dataContext.Provider value={(studentsData, teachersData)}>
      <Routes>
        <Route path="/" element={<Portal />}>
          <Route index element={<Dashboard />}></Route>
          <Route
            path="/teacher"
            element={
              <TeacherDetails
                teachersData={teachersData}
                setteachersData={setteachersData}
              />
            }
          ></Route>
          <Route
            path="/student"
            element={
              <StudentDetails
                studentsData={studentsData}
                setstudentsData={setstudentsData}
              />
            }
          ></Route>
          <Route
            path="student/:id"
            element={<SingleStudent studentdata={studentsData} />}
          />
          <Route
            path="teacher/:id"
            element={<SingleTeacher teacherdata={teachersData} />}
          />
          <Route
            path="editstudent/:id"
            element={
              <EditStudent
                studentdata={studentsData}
                setstudentsData={setstudentsData}
              />
            }
          />
          <Route
            path="editteacher/:id"
            element={
              <EditTeacher
                teacherdata={teachersData}
                setteachersData={setteachersData}
              />
            }
          />
          <Route
            path="createstudent"
            element={
              <CreateStudent
                studentsData={studentsData}
                setstudentsData={setstudentsData}
              />
            }
          />
          <Route
            path="createteacher"
            element={
              <CreateTeacher
                teachersData={teachersData}
                setteachersData={setteachersData}
              />
            }
          />
        </Route>
      </Routes>
    </dataContext.Provider>
  );
}

export default App;
