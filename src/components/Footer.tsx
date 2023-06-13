import React from 'react'
import { Github, Instagram, Link, Linkedin } from 'react-bootstrap-icons';
import './Footer.css'

const Footer = () => {
  return (
    <div className="py-5 parent">
      <p className="text-yellow-500">Made with ❤️ by Ujjwal Kirti.</p>
      <div className="flex items-center justify-center gap-x-5 text-xl socials-container">
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/ujjwal-kirti/"
        >
          <Linkedin />
        </a>
        {/* Instagram */}
        <a href="https://www.instagram.com/ujjwal_kirti/">
          <Instagram />
        </a>
        {/* Github */}
        <a
          href="https://github.com/ujjwalkirti"
        >
          <Github />
        </a>
        {/* Portfolio */}
        <a
          href="https://www.ujjwalkirti.tech"
        >
          <Link />
        </a>
      </div>
    </div>
  );
}

export default Footer