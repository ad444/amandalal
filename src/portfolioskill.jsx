import React from "react";
import Flip from 'react-reveal/Flip';


const Skill = ({ backgroundcolor, txtColor }) => {

  return (
    <>
      <div id="skill" className="container-fluid" style={{ backgroundColor: backgroundcolor, color: txtColor, border: "1px solid", borderColor: backgroundcolor }} >
        <div id="skillcontent" className="row">
          <div className="col-12 mb-4 mt-2 mt-sm-4 mt-md-2 text-center">
            <div>
              <h2 className="heading">Skills</h2>
              <center><div className="headborder"></div></center>
            </div>
          </div>
          <div className="d-none d-inline col-md-1 col-xl-2"></div>
          <div className="col-6 col-md-5 col-xl-4">

            <Flip left cascade>
              <ol id="skillslist" className="text-center">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
              </ol>
            </Flip>
          </div>
          <div className="col-6 col-md-5 col-xl-4">

            <Flip left cascade>
              <ol id="skillslist" className="text-center">
                <li>Bootstrap</li>
                <li>jQuery</li>
                <li>Node.js</li>
                <li>GitHub</li>
              </ol>
            </Flip>
          </div>
          <div className="d-none d-inline col-md-1 col-xl-2"></div>
        </div>
      </div>
    </>
  );
}

export default Skill;