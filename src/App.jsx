import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
<<<<<<< HEAD
import Admin from './dashBoards/Admin';
=======
import TeacherList from './components/teacher/TeacherList';
import TeacherForm from './components/teacher/TeacherForm';
import TeacherDetail from './components/teacher/TeacherDatail';
import EditTeacherForm from './components/teacher/EditTeacherForm';
import StudentList from './components/student/StudentList';
import ClassList from './components/class/ClassList';
import SubjectList from './components/subject/SubjectList';
import Sidebar from './components/sidebar/Sidebar';
import ClassForm from './components/class/ClassForm';
import Navbar from './components/navbar/Navbar';
import StudentForm from './components/student/StudentForm';
import StudentDetail from './components/student/StudentDetail';
import EditStudentForm from './components/student/EditStudentForm';
import TeacherSidebar from './components/sidebar/TeacherSidebar';
>>>>>>> 087657eec26c4c9371542e9e6e11a5ff78dfd3d6



function App() {
  return (
<<<<<<< HEAD
    <div>
      <Admin/>
=======
    <div className="flex flex-col min-h-screen">
      <Router>
        <Navbar />   
        <div className="flex flex-grow">
          {/* <TeacherSidebar/> */}

         <Sidebar />
        <div className="flex-1 p-4 transition-all duration-300">
          <Routes>
            <Route path="/" element={<div>Dashboard overviews</div>}/>
            <Route path="/teachers" element={<TeacherList />} />
            <Route path="/teachers/new" element={<TeacherForm />} />
            {<Route path="/details/:id" element={<TeacherDetail />} /> }
            <Route path="/editteacher/:id" element={<EditTeacherForm />} />
            {/* Add routes for Student, Class, Subject, Reports, etc. */}
            <Route path="/students" element={<StudentList/>} />
            <Route path="/students/new" element={<StudentForm/>}/>
            <Route path='/stdDetails/:id' element={<StudentDetail/>}/>
            <Route path='/editstudent/:id' element={<EditStudentForm/>}/>
            <Route path="/classes" element={<ClassList/>} />
            <Route path="/classes/new" element={<ClassForm/>} />
            <Route path="/subjects" element={<SubjectList/>} />
            <Route path="/reports" element={<div>Reports Component</div>} />
            <Route path="/logout" element={<div>Logout Component</div>} />
          </Routes>
        </div>
        </div>
      </Router>
>>>>>>> 087657eec26c4c9371542e9e6e11a5ff78dfd3d6
    </div>
  )
}

export default App;
