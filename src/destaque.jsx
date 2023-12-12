import React from "react";
import './destaque.css';

export default function Destaque() {
    const listaLocalStorage = JSON.parse(localStorage.getItem("Lista")) || [];

    return (
        <div className="container">
        <div className="header">
            <h2>JIU</h2>
        </div>
               <div className="timeline">
                {Video.slice(-4)}
                </div> 
    </div>

     
    )
    }