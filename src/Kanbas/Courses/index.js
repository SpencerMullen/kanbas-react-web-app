import { useParams, Routes, Route, Navigate } from "react-router-dom";
import { useLocation } from "react-router";
import CourseNavigation from "./CourseNavigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import Grades from "./Grades";
import "./index.css"
import { useEffect, useState } from "react";
import axios from "axios";

function Courses() {
    const { courseId } = useParams();
    // const URL = "http://localhost:4000/api/courses";
    const URL = "https://kanbas-react-web-app-qy2j.onrender.com/api/courses";
    const [course, setCourse] = useState({});
    const findCourseById = async (courseId) => {
        const response = await axios.get(
            `${URL}/${courseId}`
        );
        setCourse(response.data);
    };
    const { pathname } = useLocation();
    const pageName = pathname.split("/").pop();
    // const course = courses.find((course) => course._id === courseId);
    useEffect(() => {
        findCourseById(courseId);
    }, [courseId]);
    return (
        <div className="d-flex">
            <div className="col">
                <div className="breadcrumb">
                    <h2 className="breadcrumb-item">{course.name}</h2>
                    <h2 className="breadcrumb-item">{pageName}</h2>
                </div>

                <CourseNavigation />
                <div>
                    <div
                        className="overflow-y-scroll position-fixed bottom-0 end-0"
                        style={{
                            left: "320px",
                            top: "50px",
                        }}
                    >
                        <Routes>
                            <Route path="/" element={<Navigate to="Home" />} />
                            <Route path="Home" element={<Home />} />
                            <Route path="Modules" element={<Modules />} />
                            <Route path="Assignments" element={<Assignments />} />
                            <Route
                                path="Assignments/:assignmentId"
                                element={<AssignmentEditor />}
                            />
                            <Route path="Grades" element={<Grades />} />
                        </Routes>
                    </div>
                </div>
            </div>



        </div>
    );
}
export default Courses;