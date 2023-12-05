import { Routes, Route, Navigate } from "react-router";
import KanbasNavigation from "./KanbasNavigation";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import Signin from "../Project/users/signin";
import { useState } from "react";
import store from "./store";
import { Provider } from "react-redux";
import axios from "axios";
import { useEffect } from "react";

function Kanbas() {
   const [courses, setCourses] = useState([]);
   // const URL = "http://localhost:4000/api/courses";
   const URL = "https://kanbas-react-web-app-qy2j.onrender.com/api/courses";
   const findAllCourses = async () => {
      const response = await axios.get(URL);
      setCourses(response.data);
   };
   useEffect(() => {
      findAllCourses();
   }, []);


   const [course, setCourse] = useState({
      name: "New Course", number: "New Number",
      startDate: "2023-09-10", endDate: "2023-12-15",
   });
   const addNewCourse = async () => {
      const response = await axios.post(URL, course);
      setCourses([
         response.data,
         ...courses,
      ]);
   };
   const deleteCourse = async (courseId) => {
      await axios.delete(
         `${URL}/${course._id}`
       );   
      setCourses(courses.filter((course) => course._id !== courseId));
   };
   const updateCourse = async () => {
      await axios.put(
         `${URL}/${course._id}`,
         course
       );   
      setCourses(
         courses.map((c) => {
            if (c._id === course._id) {
               return course;
            } else {
               return c;
            }
         })
      );
   };

   return (
      <Provider store={store}>
         <div className="d-flex">
            <KanbasNavigation />
            <div>
               <Routes>
                  <Route path="/" element={<Navigate to="Dashboard" />} />
                  <Route path="Account" element={<h1>Account</h1>} />
                  <Route path="Dashboard" element={<Dashboard
                     courses={courses}
                     course={course}
                     setCourse={setCourse}
                     addNewCourse={addNewCourse}
                     deleteCourse={deleteCourse}
                     updateCourse={updateCourse} />} />
                  <Route path="Courses" element={<h1>Courses</h1>} />
                  <Route path="Courses/:courseId/*" element={<Courses courses={courses} />} />
                  <Route path="Signin" element={<Signin />} />
               </Routes>
            </div>

         </div>
      </Provider>
   );
}
export default Kanbas;