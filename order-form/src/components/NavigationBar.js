import React from "react";
import Home from "./Home";
import ContactUs from "./ContactUs";
const NavigationBar = (props) => {
    let page = props.page;
    
    // const [pageView, setPageView] = useState() => {
    //     if (button.value === 'Home'); {
    //         pageView = {Home}
    //     } else (button.value === 'Contact Us') {
    //         pageView = {ContactUs}
    //     };
    // };
    const onClickHandler= (props) => {
       if (props.button.value === "Home"){
           page = {Home}} else if (props.button.value === "Contact Us") {
               page = {ContactUs}
           } else { page = {Home}
               
           } 
        console.log("Clicked!!!")
        // setPageView({pageSelected})
    }

  return (
    <div>
      <button value="Home" type="button" onClick={onClickHandler()}>
        Home
      </button>
      <button value="Contact Us" type="button" onClick={onClickHandler()}>
        Contact Us
      </button>
      <div>{page}</div>
    </div>
  );
};

export default NavigationBar;
