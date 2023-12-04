import React from "react";
//import softwareEngineerImage from "./software-engineer-image.jpg"; // Replace with the actual path to your image


function Home(){
    return(
        <div style={{ display: 'center', justifyContent: 'space-between' }}>
        <h2>Welcome to Our Website</h2><br/>
        {/* <img
        src={softwareEngineerImage}
        alt="Software Engineer"
        style={{ width: "300px", borderRadius: "8px", marginTop: "20px" }}
      /> */}
        <p>
          As a software engineer, I bring innovative solutions to the digital
          world. Explore and discover the possibilities with cutting-edge
          technology!
        </p>
        {/* Add more content as needed */}
      </div>
    );
}

export default Home