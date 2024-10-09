import React, { useEffect } from 'react';
import './Projects.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

// Importing project images
import cyberImage from '../Images/Cyber.png'; // Adjust the path as necessary
import bloggersImage from '../Images/Bloggers.png'; // Adjust the path as necessary
import casesImage from '../Images/cases.png'; // Adjust the path as necessary

const Projects = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms
    }, []);

    return (
        <div className="projects-container">
            {/* Large title for the projects section */}
            <h1 className="projects-title">Projects</h1>

            {/* Existing project sections */}
            <div className="project" data-aos="fade-up">
                <img src={cyberImage} alt="Cyber Missions" className="project-image" />
                <h3 className="project-name">Cyber Missions</h3>
                <p className="project-description">
                    I developed this website for Cyber Missions, a nonprofit organization, showcasing my ability to create engaging, user-friendly platforms from scratch. It’s actively used by real people and organizations, reflecting my commitment to impactful design and functionality.
                </p>
                <a href="https://www.cybermissions.org/" className="project-link">View Project</a>
            </div>
            <div className="project" data-aos="fade-up">
                <img src={casesImage} alt="Shopping Experience" className="project-image" />
                <h3 className="project-name">Cases</h3>
                <p className="project-description">
                    This vibrant React.js website delivers an engaging shopping experience, featuring intuitive add-to-cart and checkout options, along with a wishlist for favorites, all designed for seamless navigation and user satisfaction.
                </p>
                <a href="https://my-6ij1tn11j-kanaebunches-projects.vercel.app/" className="project-link">View Project</a>
            </div>
            <div className="project" data-aos="fade-up">
                <img src={bloggersImage} alt="Blogging Platform" className="project-image" />
                <h3 className="project-name">Blogging Platform: Bloggers</h3>
                <p className="project-description">
                    I created a responsive blogging platform where users can write and publish articles. The app features a rich text editor powered by React Draft WYSIWYG, allowing users to easily format and customize their content. Users can preview their work before publishing, and stories are saved locally for quick access. With a clean design, smooth navigation, and an intuitive interface, this app provides a seamless writing experience for bloggers.
                </p>
                <a href="https://www.loom.com/share/65e3d15e598c40ae9d5c48e3a476ddc3?sid=297480eb-791a-4423-b03a-e874acbaa7a3" className="project-link">View Project</a>
            </div>

            {/* Contact section */}
            <div className="contact-section" data-aos="fade-up">
                <h2>Contact Me</h2>
                <p>Feel free to reach out via email:</p>
                <a href="mailto:kanae.bunche@gmail.com" className="contact-email">kanae.bunche@gmail.com</a>
            </div>
        </div>
    );
};

export default Projects;
