import React from "react";
import logo from "../img/Profile.jpg";
import jslogo from "../img/javascript.png";
import reactlogo from "../img/reactjs.png";
import nodelogo from "../img/nodejs.png";
import csslogo from "../img/css3.png";
import htmllogo from "../img/html5.png";
import project1 from "../img/project-1.jpeg";
import project2 from "../img/project-2.jpeg";
import gogglelogo from "../img/goog-logo.svg";

function Home() {
  return (
    <>
      <section className="container about">
        <div className="avatar">
          <img src={logo} alt="Profile" />
        </div>
        <div className="about-me">
          <h1>
            Crafting seamless digital experiences from <br />
            <span>concept to code!</span>
          </h1>
          <p>
            I specialize in creating complete web applications, handling both
            front-end and back-end development. I design intuitive user
            interfaces and build robust server-side logic, ensuring seamless
            functionality. My skills encompass a wide range of programming
            languages, frameworks, and tools, allowing me to take projects from
            concept to deployment. I thrive on solving complex problems and
            enjoy working with databases, APIs, and cloud services. My focus is
            on delivering solutions that provide exceptional user experiences
            and meet all technical requirements.
          </p>
          <div className="about-btn">
            <button className="btn-primary">Get In Touch</button>
            <button className="btn-secondary">Download CV</button>
          </div>
        </div>
      </section>
      <section className="container skills">
        <h2>My Skills</h2>
        <div className="skills-container">
          <div>
            <img src={htmllogo} />
          </div>
          <div>
            <img src={csslogo} />
          </div>
          <div>
            <img src={jslogo} />
          </div>
          <div>
            <img src={reactlogo} />
          </div>
          <div>
            <img src={nodelogo} />
          </div>
        </div>
      </section>
      <section className="container">
        <h2 className="primary-heading heading-project">Projects</h2>
        <div className="projects">
          <div className="project-item">
            <img src={project1} />
            <div className="project-title">
              <p>Click here to view</p>
              <h3>Project 1</h3>
            </div>
          </div>
          <div className="project-item">
            <img src={project2} />
            <div className="project-title">
              <p>Click here to view</p>
              <h3>Project 1</h3>
            </div>
          </div>
        </div>
      </section>

      <section className="container">
        <h2 className="primary-heading heading-experience">Experience</h2>
        <div className="experience">
          <div className="experience-item">
            <div className="experience-title-container">
              <div>
                <img src={gogglelogo} />
              </div>
              <div className="experience-title">Lead Software Engineer</div>
              <div className="date">Nov 2019 - Present</div>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A, rem
              repudiandae voluptatem distinctio reiciendis impedit nemo magnam
              amet quos, sed deleniti maxime placeat delectus quidem veniam!
              Molestiae nulla hic neque.
            </p>
          </div>
          <div className="experience-item">
            <div className="experience-title-container">
              <div>
                <img src={gogglelogo} />
              </div>
              <div className="experience-title">Lead Software Engineer</div>
              <div className="date">Nov 2019 - Present</div>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A, rem
              repudiandae voluptatem distinctio reiciendis impedit nemo magnam
              amet quos, sed deleniti maxime placeat delectus quidem veniam!
              Molestiae nulla hic neque.
            </p>
          </div>
          <div className="experience-item">
            <div className="experience-title-container">
              <div>
                <img src={gogglelogo} />
              </div>
              <div className="experience-title">Lead Software Engineer</div>
              <div className="date">Nov 2019 - Present</div>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A, rem
              repudiandae voluptatem distinctio reiciendis impedit nemo magnam
              amet quos, sed deleniti maxime placeat delectus quidem veniam!
              Molestiae nulla hic neque.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
