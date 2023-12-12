import { useState } from "react";
import { Link } from "react-router-dom";

export default function Destaque(){
    const listaLocalStorage = localStorage.getItem("Lista");

    return(
        <div>
            <h1>JIU FLIX</h1>
            {listaLocalStorage.slice(-4).map(canal)}
        </div>
    )
    }