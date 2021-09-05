import React from "react";
import { FaTimes, FaRegCircle, FaPen } from "react-icons/fa";

const Icon = ({choice})=>{
    switch(choice){
        case "cross":
            return <FaTimes className="Icon" />;
        case "circle":
            return <FaRegCircle className="Icon"  />;
        default:
            return <FaPen className="Icon" />
    }
}

export default Icon