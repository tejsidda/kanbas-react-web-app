import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Kanbas Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (7)</h2> <hr />
      <div id="wd-dashboard-courses">
        {/* Course 1 */}
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/1234/Home">
            <img src="/images/reactjs.jpg" width={200} alt="React JS"/>
            <div>
              <h5>CS1234 React JS</h5>
              <p className="wd-dashboard-course-title">Full Stack Software Developer</p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        {/* Course 2 */}
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/2345/Home">
            <img src="/images/python.jpg" width={200} alt="Python"/>
            <div>
              <h5>CS2345 Python Programming</h5>
              <p className="wd-dashboard-course-title">Intro to Python for Beginners</p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        {/* Course 3 */}
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/3456/Home">
            <img src="/images/ai.jpg" width={200} alt="AI"/>
            <div>
              <h5>CS3456 Artificial Intelligence</h5>
              <p className="wd-dashboard-course-title">AI Concepts and Applications</p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        {/* Course 4 */}
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/4567/Home">
            <img src="/images/webdev.jpg" width={200} alt="Web Development"/>
            <div>
              <h5>CS4567 Web Development</h5>
              <p className="wd-dashboard-course-title">Building Modern Web Apps</p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        {/* Course 5 */}
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/5678/Home">
            <img src="/images/machinelearning.jpg" width={200} alt="Machine Learning"/>
            <div>
              <h5>CS5678 Machine Learning</h5>
              <p className="wd-dashboard-course-title">ML Algorithms and Models</p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        {/* Course 6 */}
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/6789/Home">
            <img src="/images/datascience.jpg" width={200} alt="Data Science"/>
            <div>
              <h5>CS6789 Data Science</h5>
              <p className="wd-dashboard-course-title">Analyzing Big Data with Python</p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        {/* Course 7 */}
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/7890/Home">
            <img src="/images/cybersecurity.jpg" width={200} alt="Cybersecurity"/>
            <div>
              <h5>CS7890 Cybersecurity</h5>
              <p className="wd-dashboard-course-title">Introduction to Cybersecurity</p>
              <button> Go </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
