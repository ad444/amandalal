import React, { useState } from "react";
import Menu from "./portfoliomenu";
import BackToTopButton from "./portfolioBackToTopButton";
import Home from "./portfoliohome";
import About from "./portfolioabout";
import Skill from "./portfolioskill";
import Contact from "./portfoliocontact";
import Projects from "./portfolioprojects";
import Footer from "./portfoliofooter";

const App = () => {

    //side navigation position
    const [posi, setposi] = useState("100%")

    //navbar dark theme
    const [navbarbgColor, setnavbarbgColor] = useState("#FFFFFF")
    const [sideNavTxtColor, setsideNavTxtColor] = useState("cadetblue")
    const [sliderbgColor, setsliderbgColor] = useState("cadetblue")
    const [togglebgColor, settogglebgColor] = useState("black")

    //home, projects, and contact component dark theme
    const [bgColor, setbgColor] = useState("#FFFFFF")
    const [textColor, settextColor] = useState("cadetblue")

    //about and skill component dark theme 
    const [abouttextColor, setabouttextColor] = useState("black")

    const slide = () => {
        if (posi === "50%") {
            setposi("100%");
            setnavbarbgColor("#FFFFFF");
            setsideNavTxtColor("cadetblue");
            setsliderbgColor("cadetblue");
            settogglebgColor("black");
            //home, projects, and contact component white theme
            setbgColor("white");
            settextColor("cadetblue");
            //about and skill component white theme
            setabouttextColor("black");
        } else {
            setposi("50%");
            setnavbarbgColor("black");
            setsideNavTxtColor("whitesmoke");
            settogglebgColor("#FFFFFF");
            //home, projetcs, and contact component dark theme
            setbgColor("black");
            settextColor("whitesmoke");
            //about and skill component dak theme
            setabouttextColor("whitesmoke");
        }
    }

    return (
        <>
            < Menu position={posi} bgColor={navbarbgColor} txtColor={sideNavTxtColor} sbgColor={sliderbgColor}
                tbgColor={togglebgColor} darkTheme={slide} />
            < BackToTopButton />    
            < Home backgroundcolor={bgColor} txtColor={textColor} />
            < About backgroundcolor={bgColor} txtColor={abouttextColor} />
            < Skill backgroundcolor={bgColor} txtColor={abouttextColor} />
            < Projects backgroundcolor={bgColor} txtColor={textColor} />
            < Contact backgroundcolor={bgColor} txtColor={textColor} />
            < Footer backgroundcolor={bgColor} txtColor={abouttextColor} />
        </>
    );
}

export default App;