import React from "react";

const Footer = ({ backgroundcolor, txtColor }) => {
    return (
        <>
            <div id="footer" className="container-fluid" style={{ backgroundColor: backgroundcolor, color: txtColor }}>
                <div id="footercontent" className="row">
                    <div className="col-12 text-center">
                        <p id="footerText">All the &#169; 2021 copyrights are reserved for this website.</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;
