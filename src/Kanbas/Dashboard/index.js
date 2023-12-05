import { Link } from "react-router-dom";

function Dashboard({ courses, course, setCourse, addNewCourse,
    deleteCourse, updateCourse }) {

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
                    <Link to={`/Kanbas/Courses/${course._id}`} className="btn btn-secondary">
                        Go to course
                    </Link>
                    <button className="btn btn-secondary"
                        onClick={(event) => {
                            event.preventDefault();
                            setCourse(course);
                        }}>
                        Edit
                    </button>

                    <button className="btn btn-danger"
                        onClick={(event) => {
                            event.preventDefault();
                            deleteCourse(course._id);
                        }}>
                        Delete
                    </button>

                </div>
            </div>
        );
    }

    return (
        <div className="d-flex">
            <div className="container">
                <h1>Dashboard</h1>
                <h5>Course</h5>
                <input value={course.name} className="form-control"
                    onChange={(e) => setCourse({ ...course, name: e.target.value })} />
                <input value={course.number} className="form-control"
                    onChange={(e) => setCourse({ ...course, number: e.target.value })} />
                <input value={course.startDate} className="form-control" type="date"
                    onChange={(e) => setCourse({ ...course, startDate: e.target.value })} />
                <input value={course.endDate} className="form-control" type="date"
                    onChange={(e) => setCourse({ ...course, endDate: e.target.value })} />
                <button onClick={addNewCourse} className="btn btn-secondary">
                    Add
                </button>
                <button onClick={updateCourse} className="btn btn-secondary">
                    Update
                </button>


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