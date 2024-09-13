import React from "react";
import "./style.css";
// import samsungLap from "/samsung-lap.jpg";
import samsungLap from "./images/samsung-lap.jpg";
const Index = () => {
  return (
    <div className="previewBody">
      <div className="navTopBarContainer">
        <div className="navBarTopContainerSub">
          <a className="text_button">Register</a>
        </div>
      </div>
      <div className="previewContainer">
        <div className="bannerSection">
          <div className="w_50 pr_15">
            <h1 className="bannerTitle coinsNameBox">Ai forex trading</h1>
            <p className="bannerPara">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <p className="bannerPara">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <p className="bannerPara">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
          <div className="w_50 pr_15 bannerRight">
            <img src={samsungLap} className="bannerImage" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
