import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlayCircle,faVolumeUp,faDownload} from '@fortawesome/free-solid-svg-icons';

import "./style.scss";

export const AudioPlayer = () => {
    return (
        <div className="audio-player">
            <FontAwesomeIcon icon={faPlayCircle} className="play" />
            <span className="time">26.00</span>
            <div className="progress">
            </div>
            <span className="time">43.25</span>
            <FontAwesomeIcon icon={faVolumeUp} className="controls" />
            <FontAwesomeIcon icon={faDownload} className="controls" />
        </div>
    )
}