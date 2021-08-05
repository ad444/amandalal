import React from "react";
import Note_Image from "./images/note.png";
import Calculator_Image from "./images/calculator.png";
import Stopwatch_Image from "./images/stopwatch.png";
import MoreProjects_Image from "./images/Working On New Projects.png";
import WordCounter from "./images/WordCounter.png";
import Alarm from "./images/alarm.png";

const Projects = ({ backgroundcolor, txtColor }) => {
    return (

        <>
            <div id="projects" className="container-fluid" style={{ backgroundColor: backgroundcolor, color: txtColor, border: "1px solid", borderColor: backgroundcolor }}>
                <div id="projectcontent" className="row">
                    <div className="col-12 text-center mt-2 mt-sm-4 mt-md-2 mb-4">
                        <div>
                            <h2 className="heading">Projects</h2>
                            <center><div className="headborder"></div></center>
                        </div>
                    </div>

                    <div className="d-none d-md-inline col-md-1 col-xl-2"></div>

                    <div className="col-12 col-md-10 col-xl-8">
                        <div id="projectscontainer" className="carousel slide" data-ride="carousel">

                            {/* Carousel Slide */}
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <a className="project_link" href="https://ad444.github.io/notes/" target="_parent" alt="loading error">
                                        <img className="img-fluid" src={Note_Image} alt="Note_Image" />
                                    </a>
                                </div>
                                <div className="carousel-item">
                                    <a className="project_link" href="https://ad444.github.io/calculator.github.io/" target="_parent" alt="loading error">
                                        <img className="img-fluid" src={Calculator_Image} alt="Calculator_Image" />
                                    </a>
                                </div>
                                <div className="carousel-item">
                                    <a className="project_link" href="https://ad444.github.io/stopwatch.github.io/" target="_parent" alt="loading error">
                                        <img className="img-fluid" src={Stopwatch_Image} alt="Stopwatch_Image" />
                                    </a>
                                </div>
                                <div className="carousel-item">
                                    <a className="project_link" href="https://ad444.github.io/WordCounter/" target="_parent" alt="loading error">
                                        <img className="img-fluid" src={WordCounter} alt="Wordcounter_Image" />
                                    </a>
                                </div>
                                <div className="carousel-item">
                                    <a className="project_link" href="https://ad444.github.io/alarm/" target="_parent" alt="loading error">
                                        <img className="img-fluid" src={Alarm} alt="Wordcounter_Image" />
                                    </a>
                                </div>
                                <div className="carousel-item">
                                    <img className="img-fluid" src={MoreProjects_Image} alt="New York" />
                                </div>
                            </div>

                            {/* //Left and right controls */}
                            <a className="carousel-control-prev" href="#projectscontainer" data-slide="prev">
                                <span className="carousel-control-prev-icon"></span>
                            </a>
                            <a className="carousel-control-next" href="#projectscontainer" data-slide="next">
                                <span className="carousel-control-next-icon"></span>
                            </a>

                        </div>
                        <p>Click on slide to see the project.</p>
                    </div>

                    <div className="d-none d-md-inline col-md-1 col-xl-2"></div>
                </div>
            </div>
        </>
    );
}

export default Projects;
