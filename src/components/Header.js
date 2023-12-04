import React from "react";

function Header({ setCurrentPage }) {
    return (
        <header>
            <nav>
        <ul>
          <li onClick={() => setCurrentPage('home')}>Home</li>
          <li onClick={() => setCurrentPage('about')}>About</li>
          <li onClick={() => setCurrentPage('contact')}>Contact</li>
        </ul>
      </nav>
        </header>

    );
}

export default Header;