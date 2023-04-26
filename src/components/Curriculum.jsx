import React from "react";
import cv from "../assets/cv.jpg";
import cvDownload from "../assets/CV.pdf";
import "../styles/curriculum.css";

const Curriculum = () => {
  return (
    <div className="content_cv">
      <br />
      <div className="title_curriculum">
        <h1>Curriculum</h1>
      </div>

      <div className="img_cv">
        <img src={cv} alt="cv" />
      </div>
      <div className="download">
        <a href={cvDownload} download>
          <button>Download CV</button>
        </a>
      </div>
    </div>
  );
};

export default Curriculum;
