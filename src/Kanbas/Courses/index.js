import db from "../../Kanbas/Database";
import { useParams, Routes, Route, Navigate } from "react-router-dom";
import { useLocation } from "react-router";
import CourseNavigation from "./CourseNavigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import Grades from "./Grades";
import "./index.css"

function Courses() {
    const { courseId } = useParams();
    const { pathname } = useLocation();
    const pageName = pathname.split("/").pop();
    const course = db.courses.find((course) => course._id === courseId);
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