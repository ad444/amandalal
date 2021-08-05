import React from "react";
import VisibilitySensor from "react-visibility-sensor";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const About = ({ backgroundcolor, txtColor }) => {

  return (
    <>

      <div id="about" className="container-fluid" style={{ backgroundColor: backgroundcolor, color: txtColor, border: `1px solid ${backgroundcolor}` }}>
        <div id="aboutcontent" className="row mx-auto">
          <div className="col-12 text-center mt-2 mt-sm-4 mt-md-2">
            <div>
              <h2 className="heading">About</h2>
              <center><div className="headborder"></div></center>
            </div>
          </div>
          <div className="col-12 col-md-10 col-xl-8 mx-auto mt-4">
            <h5 id="abouttext">Pursuing an integrated M.Tech course in IT from International Institute of Professional Studies, DAVV, Indore.
            <br/><em id="highlightedPhrase" className="font-weight-bold">"Seeking internship to learn more about web technologies & tools in real world and work with sheer determination & dedication to produce impactful results for the company".</em>
            </h5>
          </div>

          <div className="col-12 mt-4">
            <div className="row">
              <div className="d-none d-md-inline col-md-1 col-xl-2"></div>
              <div className="col-4 col-md-3 col-xl-2 text-left"><p id="acadyear">12th</p></div>
              <div className="col-4 col-md-2 col-xl-1 text-center ">
                <VisibilitySensor>
                  {({ isVisible }) => {
                    const percentage = isVisible ? 81.9 : 0;
                    return (
                      <CircularProgressbar className="marks"
                        value={percentage} text={`${percentage}%`}
                        styles={buildStyles({

                          // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                          strokeLinecap: 'rounded',

                          // Text size
                          textSize: '16px',

                          // How long animation takes to go from one percentage to another, in seconds
                          pathTransitionDuration: 0.5,

                          // Can specify path transition in more detail, or remove it entirely
                          // pathTransition: 'none',

                          // Colors
                          pathColor: `rgba(62, 152, 199, ${percentage / 100})`,
                          // textColor: '#f88',
                          trailColor: '#d6d6d6',
                          backgroundColor: '#3e98c7',
                        })}
                      />
                    );
                  }}
                </VisibilitySensor>
              </div>
              <div className="col-4 col-md-5 col-xl-5 text-right"><p className="acadname">The Creative Public Higher Secondary School</p>
              </div>
              <div className="d-none d-md-inline col-md-1 col-xl-2"></div>
            </div>
          </div>

          {/* <div className="col-12 mt-4">
            <div className="row">
              <div className="d-none d-md-inline col-md-1 col-xl-2"></div>
              <div className="col-4 col-md-3 col-xl-2 text-left"><p id="acadyear">1<sup>st</sup> Year</p></div>
              <div className="col-4 col-md-2 col-xl-1 text-center">
                <VisibilitySensor>
                  {({ isVisible }) => {
                    const percentage = isVisible ? 8.02 : 0;
                    return (
                      <CircularProgressbar className="marks"
                        value={percentage} maxValue={10} text={`${percentage} CGPA`}
                        styles={buildStyles({

                          // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                          strokeLinecap: 'rounded',

                          // Text size
                          textSize: '16px',

                          // How long animation takes to go from one percentage to another, in seconds
                          pathTransitionDuration: 0.5,

                          // Can specify path transition in more detail, or remove it entirely
                          // pathTransition: 'none',

                          // Colors
                          pathColor: `rgba(62, 152, 199, ${percentage / 10})`,
                          // textColor: '#f88',
                          trailColor: '#d6d6d6',
                          backgroundColor: '#3e98c7',
                        })}
                      />
                    );
                  }}
                </VisibilitySensor>
              </div>
              <div className="col-4 col-md-5 col-xl-5 text-right"><p className="acadname">International Institute of Professional Studies, DAVV</p></div>
              <div className="d-none d-md-inline col-md-1 col-xl-2"></div>
            </div>
          </div> */}

          <div className="col-12 mt-4">
            <div className="row">
              <div className="d-none d-md-inline col-md-1 col-xl-2"></div>
              <div className="col-4 col-md-3 col-xl-2 text-left"><p id="acadyear">2<sup>nd</sup> Year</p></div>
              <div className="col-4 col-md-2 col-xl-1 text-center">
                <VisibilitySensor>
                  {({ isVisible }) => {
                    const percentage = isVisible ? 7.9 : 0;
                    return (
                      <CircularProgressbar className="marks"
                        value={percentage} maxValue={10} text={`${percentage} CGPA`}
                        styles={buildStyles({

                          // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                          strokeLinecap: 'rounded',

                          // Text size
                          textSize: '16px',

                          // How long animation takes to go from one percentage to another, in seconds
                          pathTransitionDuration: 0.5,

                          // Can specify path transition in more detail, or remove it entirely
                          // pathTransition: 'none',

                          // Colors
                          pathColor: `rgba(62, 152, 199, ${percentage / 10})`,
                          // textColor: '#f88',
                          trailColor: '#d6d6d6',
                          backgroundColor: '#3e98c7',
                        })}
                      />
                    );
                  }}
                </VisibilitySensor>
              </div>
              <div className="col-4 col-md-5 col-xl-5 text-right"><p className="acadname">International Institute of Professional Studies, DAVV</p>
              </div>
              <div className="d-none d-md-inline col-md-1 col-xl-2"></div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default About;