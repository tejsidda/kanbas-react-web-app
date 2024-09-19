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
                to="/Kanbas/Courses/4100/Home">
            <img src="/images/python.jpg" width={200} alt="Python"/>
            <div>
              <h5>CS4100 Python Programming</h5>
              <p className="wd-dashboard-course-title">Python</p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        {/* Course 3 */}
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/5600/Home">
            <img src="/images/ai.jpg" width={200} alt="AI"/>
            <div>
              <h5>CS5600 Artificial Intelligence</h5>
              <p className="wd-dashboard-course-title">Foundation of AI</p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        {/* Course 4 */}
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/5200/Home">
            <img src="/images/webdev.jpg" width={200} alt="Full stack Development"/>
            <div>
              <h5>CS5200 Web Development</h5>
              <p className="wd-dashboard-course-title">Application Development</p>
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
              <p className="wd-dashboard-course-title">Algorithms</p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        {/* Course 6 */}
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/6700/Home">
            <img src="/images/datascience.jpg" width={200} alt="Data Science"/>
            <div>
              <h5>CS6700 Data Science</h5>
              <p className="wd-dashboard-course-title">Big Data</p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        {/* Course 7 */}
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/6620/Home">
            <img src="/images/cybersecurity.jpg" width={200} alt="Cybersecurity"/>
            <div>
              <h5>CS6620 Cybersecurity</h5>
              <p className="wd-dashboard-course-title">Information System Forensics</p>
              <button> Go </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
