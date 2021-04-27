import React from "react";


function  CharacterComponent (props){
    return      <div>
        <div>
            <img src={props.img}
                 alt=""/>
            <p>{props.description}</p>
        </div>
    </div>
}



export  default CharacterComponent;