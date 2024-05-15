import "./Button.module.scss";
import React, { ChangeEvent, useState, useEffect } from "react";

interface ButtonInterface {
    type?: string,
    label: string,
    onClick?: (value: any) => void;
}

const Button = ({type, label, onClick}: ButtonInterface) => {

   
    

  return (
    <>
       <button className="custom-button" onClick={onClick}>
        {label}
       </button>
    </>

  );
}

export default Button;
