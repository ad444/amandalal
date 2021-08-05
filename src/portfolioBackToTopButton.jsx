import React, {useState} from "react";


const BackToTopButton = ()=>{
    
    //Hook to manage display of backToTop button
    const [show, setshow] = useState("none");
    
    //Display backToTop Button on scrolling 20 from the top
    const scrollFunction = ()=> {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
           setshow("block");
        } else {
           setshow("none");
        }
    }
    
    //Will run scrollFunction on scroll
    window.onscroll = function (){
        console.log("scroll function is running");
        scrollFunction();
    };
    
    //Function to scroll screen back to top
    const topFunction = ()=> {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
      }
      
    return(
        <>
          <div id="rocket" onClick={topFunction} style={{display:show}}>
            <div id="rocketbody"></div> 
            <div id="rocketwingleft"></div>
            <div id="rocketwingright"></div>
            <div id="exhaust"></div>
            <div id="flame"></div>
          </div>
        </>
    );
}

export default BackToTopButton;