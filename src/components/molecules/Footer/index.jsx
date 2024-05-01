import React from 'react';
import './style.css';

const Footer = (props) => {
  return (
    <footer className="Footer">
      <section>
       Crafted with passion and dedication with {' '}
        <span className="Footer__Heart">&hearts;</span> by{' '}
        <a
          href="https://www.linkedin.com/in/mohitjoping/"
          target="_blank"
          rel="noopener noreferrer"
          className="Footer__Link"
        >
        Mohit
        </a>
      </section>

      <section className="Footer__Items">
       
        <a
          href="https://github.com/mohitjoping/Algolluminate.git"
          target="_blank"
          rel="noopener noreferrer"
          className="Footer__Link"
        >
          <img className="githubpng" src="assets/github.png" alt="code" />
        </a>
      </section>
    </footer>
  );
};

export default Footer;
