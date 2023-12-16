import React from "react";

function Header({ setCurrentPage }) {
    return (
        <header>
            <nav>
        <ul>
          <li onClick={() => setCurrentPage('home')}>Home</li>
          <li onClick={() => setCurrentPage('about')}>About</li>
          <li onClick={() => setCurrentPage('contact')}>Contact</li>
          <li onClick={() => setCurrentPage('project')}>Project</li>

        </ul>
      </nav>
        </header>

    );
}

export default Header;