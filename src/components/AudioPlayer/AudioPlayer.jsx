import React, {useState,useEffect, useRef} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlayCircle, faVolumeUp, faDownload, faPauseCircle } from '@fortawesome/free-solid-svg-icons';

import "./audio-player.scss";

export const AudioPlayer = (props) => {
    const audioRef = useRef(null);
    const [playing,setPlaying] = useState(false);
    const [currentTime,setCurrentTime] = useState(getTime(0));
    const [duration,setDuration] = useState();
    const toggle = () => setPlaying(!playing);

    // Format time to ss:mm
    function getTime(time) {
        if(!isNaN(time)) {
          return Math.floor(time / 60) + ':' + ('0' + Math.floor(time % 60)).slice(-2)
        }
      }

    // Toggle play/pause audio file
    useEffect(() => {
        playing ? audioRef.current.play() : audioRef.current.pause();
    },[playing]);

    // Add event listeners to audio elements to display current time and duration
    useEffect(() => {
        audioRef.current.addEventListener('ended', () => setPlaying(false));        
        audioRef.current.addEventListener('timeupdate',e => {
            setCurrentTime(getTime(e.target.currentTime));
            
            setDuration(getTime(e.target.duration));
        });
        return () => {
          audioRef.removeEventListener('ended', () => setPlaying(false));
          audioRef.removeEventListener('timeupdate',()=>{});
        };
      }, []);

      useEffect(() => {
        setDuration(getTime(audioRef.current.duration));
      },[duration])

      return (          
        <div className="audio-player">
            <audio ref={audioRef}>
                <source src={props.audio} type="audio/mpeg" />
            </audio>
            <FontAwesomeIcon icon={playing ? faPauseCircle : faPlayCircle} className="play" onClick={toggle} />
            <span className="time">{currentTime}</span>
            <div className="progress">
            </div>
            <span className="time">{duration}</span>
            <FontAwesomeIcon icon={faVolumeUp} className="controls" />
            <FontAwesomeIcon icon={faDownload} className="controls" />
        </div>
    )
}