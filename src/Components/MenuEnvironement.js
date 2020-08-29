import React from 'react'
import {Link} from "react-router-dom";
import Logo from "../Images/téléchargement.png";

function MenuEnvironement(){
    return (
        <ul className="flex">
            <li className="mr-6">
                    <Link to="/intg" >
                        INTG
                    </Link>
            </li>
            <li className="mr-6">
                    <Link  to={`/uat/`}>
                    UAT
                    </Link>
            </li>
            <li className="mr-6">
                    <Link to={`/prod/`}>
                        PROD
                    </Link>
            </li>

        </ul>
    )
}

export default MenuEnvironement;