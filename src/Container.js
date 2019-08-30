import React from 'react';
import ListComponent from "./ListComponent";

function Container(){
    return(
        <div className="two">
            <>
            <ListComponent/>
            <img style={{height:"500px",width:"500px"}} src="fruit image.jpg"></img>
            </>

        </div>
    )
}


export default Container