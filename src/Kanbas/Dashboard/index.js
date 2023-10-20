import { Link } from "react-router-dom";
import db from "../Database";
import KanbasNavigation from "../KanbasNavigation";
function Dashboard() {
    const courses = db.courses;
    return (
        <div className="d-flex">
            <div className="container">
                <h1>Dashboard</h1>
                <div className="row">
                    {courses.map((course) => (
                        <div className="col-md-4" key={course.id}>
                            <CourseCard course={course} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
export default Dashboard;

// Use card component from bootstrap
// blue color square filler 100x100 on top of name on top of number on top of button 
function CourseCard(props) {
    const { course } = props;
    return (
        <div className="card">
            <div className="card-body">
                <div className="col">
                    <div className="bg-primary card-img-top" style={{ width: 200, height: 150 }}></div>
                    <div className="d-flex flex-column">
                        <h5 className="card-title">{course.name}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">{course.number}</h6>
                    </div>
                </div>
                <Link to={`/Kanbas/Courses/${course._id}`} className="btn btn-primary">
                    Go to course
                </Link>
            </div>
        </div>
    );
}