import React from "react";
import { useState } from "react";
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
const Menu = ({ position, bgColor, txtColor, sbgColor, tbgColor, darkTheme }) => {

    const [open, setOpen] = React.useState(false)

    const [pos, setpos] = useState(100 + "%")

    const [activeState, setactiveState] = useState({
        home: "menu_links",
        about: "menu_links",
        skill: "menu_links",
        projects: "menu_links",
        contact: "menu_links"
    })

    const changeState = (event) => {
        console.log("changeState called")
        const className = event.target.name;
        setactiveState((prev) => {
            prev.home = "menu_links";
            prev.about = "menu_links";
            prev.skill = "menu_links";
            prev.projects = "menu_links";
            prev.contact = "menu_links";
            return {
                ...prev,
                [className]: "active_menu_links",
            };

        });
    }

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    const openNav = () => {
        setpos(0 + "%");
    }

    const closeNav = () => {
        setpos(100 + "%");
    }

    return (

        <>
            {/* Side Navigation Menu below 768px*/}
            <div id="mySidenav" className="sidenav" style={{ left: pos, backgroundColor: bgColor }}>
                <button id="closebtn" onClick={closeNav} style={{ color: txtColor, cursor: "pointer" }}>
                    &times;</button>
                <a href="#home" onClick={closeNav} style={{ color: txtColor }}>Home</a>
                <a href="#about" onClick={closeNav} style={{ color: txtColor }}>About</a>
                <a href="#skill" onClick={closeNav} style={{ color: txtColor }}>Skills</a>
                <a href="#projects" onClick={closeNav} style={{ color: txtColor }}>Projects</a>
                <a href="#contact" onClick={closeNav} style={{ color: txtColor }}>Contact</a>
            </div>
            {/* Navigation Menu above 768px*/}
            <div id="navbar" className="container-fluid" style={{ backgroundColor: bgColor }}>
                <div id="navigationrow" className="row" >
                    <div id="nav" className="col-8 col-md-3">
                        <div id="navbrandcontainer">
                            <a id="navbrand" href="#home">Aman Dalal</a>
                        </div>
                    </div>
                    <div id="menubar" className="d-none d-md-inline col-md-9">
                        <ul id="menu" className="float-right">
                            <li><a name="home" className={activeState.home} href="#home" onClick={changeState}>Home</a></li>
                            <li><a name="about" key="about" className={activeState.about} href="#about" onClick={changeState}>About</a></li>
                            <li><a name="skill" key="skill" className={activeState.skill} href="#skill" onClick={changeState}>Skills</a></li>
                            <li><a name="projects" key="projects" className={activeState.projects} href="#projects" onClick={changeState}>Projects</a></li>
                            <li><a name="contact" key="contact" className={activeState.contact} href="#contact" onClick={changeState}>Contact</a></li>
                            <Tooltip className="d-none d-md-inline" open={open} onClose={handleClose} onOpen={handleOpen}
                                title="Switch to dark/white theme" placement="bottom" arrow>
                                <span id="slidercontainer">
                                    <div className="align-middle" id="togglebutton" onClick={darkTheme} style={{ backgroundColor: tbgColor }}>
                                        <div id="slider" style={{ left: position, backgroundColor: sbgColor }}></div>
                                    </div>
                                </span>
                            </Tooltip>
                        </ul>
                    </div>
                    <div id="sidemenu" className="col-4 d-md-none">
                        <div id="innersidemenu" className="row">
                            <div className="col-6 d-md-none m-auto ">
                                <div id="slidercontainer2">
                                    <div id="sidetogglebutton" style={{ backgroundColor: tbgColor }}>
                                        <div id="slider" onClick={darkTheme} style={{ left: position, backgroundColor: sbgColor }}></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 mx-auto">
                                <IconButton id="MenuBtnCover" onClick={openNav} aria-label="Menu_Icon">
                                    < MenuIcon id="MenuBtn" />
                                </IconButton>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Menu;