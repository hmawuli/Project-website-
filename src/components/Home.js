import React from "react";
import image from "../Image/coding.jpg"; // Replace with the actual path to your image

function Home() {
  return (
    <div >
      <div>
        <h2>Welcome to Our Website</h2>
        <p>
          As a software engineer, I bring innovative solutions to the digital
          world. Explore and discover the possibilities with cutting-edge
          technology!
        </p>
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
