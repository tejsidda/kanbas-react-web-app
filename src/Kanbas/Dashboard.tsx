import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div id="wd-dashboard" className="container">
      <h1 id="wd-dashboard-title">Kanbas Dashboard</h1> 
      <hr />
      <h2 id="wd-dashboard-published">Published Courses (7)</h2> 
      <hr />
      <div id="wd-dashboard-courses" className="row row-cols-1 row-cols-md-4 g-4">
        {/* Course 1 */}
        <div className="wd-dashboard-course col" style={{ width: "250px" }}>
          <div className="card rounded-3 overflow-hidden">
            <Link
              className="wd-dashboard-course-link text-decoration-none text-dark"
              to="/Kanbas/Courses/1234/Home"
            >
              <img src="/images/reactjs.jpg" width="100%" height={160} alt="React JS"/>
              <div className="card-body">
                <h5 className="wd-dashboard-course-title card-title">CS1234 React JS</h5>
                <p className="wd-dashboard-course-title card-text">Full Stack Software Developer</p>
                <button className="btn btn-primary">Go</button>
              </div>
            </Link>
          </div>
        </div>

        {/* Course 2 */}
        <div className="wd-dashboard-course col" style={{ width: "250px" }}>
          <div className="card rounded-3 overflow-hidden">
            <Link
              className="wd-dashboard-course-link text-decoration-none text-dark"
              to="/Kanbas/Courses/4100/Home"
            >
              <img src="/images/reactjs.jpg" width="100%" height={160} alt="Python Programming"/>
              <div className="card-body">
                <h5 className="wd-dashboard-course-title card-title">CS4100 Python Programming</h5>
                <p className="wd-dashboard-course-title card-text">Python</p>
                <button className="btn btn-primary">Go</button>
              </div>
            </Link>
          </div>
        </div>

        {/* Course 3 */}
        <div className="wd-dashboard-course col" style={{ width: "250px" }}>
          <div className="card rounded-3 overflow-hidden">
            <Link
              className="wd-dashboard-course-link text-decoration-none text-dark"
              to="/Kanbas/Courses/5600/Home"
            >
              <img src="/images/reactjs.jpg" width="100%" height={160} alt="Artificial Intelligence"/>
              <div className="card-body">
                <h5 className="wd-dashboard-course-title card-title">CS5600 Artificial Intelligence</h5>
                <p className="wd-dashboard-course-title card-text">Foundation of AI</p>
                <button className="btn btn-primary">Go</button>
              </div>
            </Link>
          </div>
        </div>

        {/* Course 4 */}
        <div className="wd-dashboard-course col" style={{ width: "250px" }}>
          <div className="card rounded-3 overflow-hidden">
            <Link
              className="wd-dashboard-course-link text-decoration-none text-dark"
              to="/Kanbas/Courses/5200/Home"
            >
              <img src="/images/reactjs.jpg" width="100%" height={160} alt="Web Development"/>
              <div className="card-body">
                <h5 className="wd-dashboard-course-title card-title">CS5200 Web Development</h5>
                <p className="wd-dashboard-course-title card-text">Application Development</p>
                <button className="btn btn-primary">Go</button>
              </div>
            </Link>
          </div>
        </div>

        {/* Course 5 */}
        <div className="wd-dashboard-course col" style={{ width: "250px" }}>
          <div className="card rounded-3 overflow-hidden">
            <Link
              className="wd-dashboard-course-link text-decoration-none text-dark"
              to="/Kanbas/Courses/5678/Home"
            >
              <img src="/images/reactjs.jpg" width="100%" height={160} alt="Machine Learning"/>
              <div className="card-body">
                <h5 className="wd-dashboard-course-title card-title">CS5678 Machine Learning</h5>
                <p className="wd-dashboard-course-title card-text">Algorithms</p>
                <button className="btn btn-primary">Go</button>
              </div>
            </Link>
          </div>
        </div>

        {/* Course 6 */}
        <div className="wd-dashboard-course col" style={{ width: "250px" }}>
          <div className="card rounded-3 overflow-hidden">
            <Link
              className="wd-dashboard-course-link text-decoration-none text-dark"
              to="/Kanbas/Courses/6700/Home"
            >
              <img src="/images/reactjs.jpg" width="100%" height={160} alt="Data Science"/>
              <div className="card-body">
                <h5 className="wd-dashboard-course-title card-title">CS6700 Data Science</h5>
                <p className="wd-dashboard-course-title card-text">Big Data</p>
                <button className="btn btn-primary">Go</button>
              </div>
            </Link>
          </div>
        </div>

        {/* Course 7 */}
        <div className="wd-dashboard-course col" style={{ width: "250px" }}>
          <div className="card rounded-3 overflow-hidden">
            <Link
              className="wd-dashboard-course-link text-decoration-none text-dark"
              to="/Kanbas/Courses/6620/Home"
            >
              <img src="/images/reactjs.jpg" width="100%" height={160} alt="Cybersecurity"/>
              <div className="card-body">
                <h5 className="wd-dashboard-course-title card-title">CS6620 Cybersecurity</h5>
                <p className="wd-dashboard-course-title card-text">Information System Forensics</p>
                <button className="btn btn-primary">Go</button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
