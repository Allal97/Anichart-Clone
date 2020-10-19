import React from 'react';
import ReactDOM from "react-dom";
import './styles.css';


const Navigation = ()=>{
    return (
        <div className="mx-auto bg-indigo-800 p-5">
        <nav className="flex justify-between">
            <div>
                <a href="#">Logo</a>
            </div>

            <ul className="flex flex-row">
                <li className="pr-5">
                    <a>
                    <h4 className="text-center">Winter</h4>
                    <p className="text-center">2021</p>
                    </a>
                </li>
                <li className="pr-5">
                    <a>
                    <h4 className="text-center">Spring</h4>
                    <p className="text-center">2021</p>
                    </a>
                </li>
                <li className="pr-5">
                    <a>
                    <h4 className="text-center">Summer</h4>
                    <p className="text-center">2020</p>
                    </a>
                </li>
                <li className="pr-5">
                    <a>
                    <h4 className="text-center">Fall</h4>
                    <p className="text-center">2020</p>
                    </a>
                </li>
            </ul>

            <ul className="flex flex-row">
            <li className="pr-5"><a>Airing</a></li>
                <li className="pr-5"><a>Archive</a></li>
                <li className="pr-5"><a>TBA</a></li>
                <li className="pr-5"><a>Settings</a></li>
            </ul>
        </nav>
        </div>
    );
};



export default Navigation;