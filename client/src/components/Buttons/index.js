import React from "react";


function Buttons(props) {
    return(
        <button className="btn btn-primary" onClick={props.onClick}>{props.children}</button>
    )

}

export default Buttons;