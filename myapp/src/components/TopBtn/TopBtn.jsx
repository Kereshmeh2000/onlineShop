import React from "react";
import {topFunction} from '../Home/main';
import * as Icon from 'react-bootstrap-icons';
import './topBtn.css'



export default function Contact(){
    return(
        <>
          <button className="start" id="start" onClick={topFunction}><Icon.ChevronUp /></button>
        </>
    )
}