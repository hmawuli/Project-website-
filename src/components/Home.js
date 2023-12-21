import React from "react";
//import About from "./About";
import Contact from "./Contact"
import Project from "./Project"
import image from "../Image/coding.jpg"; // Replace with the actual path to your image
function Home() {
  return (
    <div >
      <div>
        <h2>Welcome to hmawuli Profile</h2>
        <p>
          As a software engineer, I bring innovative solutions to the digital
          world.<br/> Explore and discover the possibilities with cutting-edge
          technology!
        </p>
          <Project/>
          <Contact/>
        {/* Add more content as needed */}
      </div>
      <img
        src={image}
        alt="coding.jpg"
        style={{ width: "300px", borderRadius: "8px", marginTop: "20px" }}
      />
    </div>
  );
}

export default Home;
