import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Sc. in Computer Science</h4>
                <h5>University Of Mumbai</h5>
              </div>
              <h3>2021 – 2025</h3>
            </div>
            <p>
              Completed a Bachelor's degree in Computer Engineering, building a
              solid foundation in networking, operating systems, Linux
              administration, and software development principles.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Cloud & DevOps Self-Learning</h4>
                <h5>AWS · Docker · Linux · CI/CD · GitHub Actions</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Gained hands-on experience with AWS (EC2, VPC, S3, IAM, NAT
              Gateway, Route Tables, Internet Gateway), Docker containerisation,
              GitHub Actions CI/CD pipelines, and shell scripting. Designed and
              deployed highly available cloud infrastructure from scratch.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Fresher — Cloud & DevOps Engineer</h4>
                <h5>Open to Opportunities</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Actively building production-grade projects including a highly
              available AWS web app with full VPC architecture, a Network
              Intrusion Detection System (NIDS) using Python & Scikit-learn, and
              full-stack applications with automated deployment pipelines.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
