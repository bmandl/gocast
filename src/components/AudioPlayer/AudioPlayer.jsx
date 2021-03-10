/* eslint-disable no-unused-expressions */
import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlayCircle,
  faVolumeUp,
  faDownload,
  faPauseCircle,
} from '@fortawesome/free-solid-svg-icons';

import './audio-player.scss';

const AudioPlayer = ({ audio }) => {
  // Format time to ss:mm
  function getTime(time) {
    if (!Number.isNaN(time)) {
      return `${Math.floor(time / 60)}:${`0${Math.floor(time % 60)}`.slice(-2)}`;
    }
    return '00:00';
  }

  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(getTime(0));
  const [duration, setDuration] = useState();
  const toggle = () => setPlaying(!playing);

  // Toggle play/pause audio file
  useEffect(() => {
    playing ? audioRef.current.play() : audioRef.current.pause();
  }, [playing]);

  // Add event listeners to audio elements to display current time and duration
  useEffect(() => {
    audioRef.current.addEventListener('ended', () => setPlaying(false));
    audioRef.current.addEventListener('timeupdate', (e) => {
      setCurrentTime(getTime(e.target.currentTime));

      setDuration(getTime(e.target.duration));
    });
    return () => {
      audioRef.current.removeEventListener('ended', () => setPlaying(false));
      audioRef.current.removeEventListener('timeupdate', () => {});
    };
  }, []);

  useEffect(() => {
    setDuration(getTime(audioRef.current.duration));
  }, [duration]);

  return (
    <div className="audio-player">
      <audio ref={audioRef}>
        <track kind="captions" />
        <source src={audio} type="audio/mpeg" />
      </audio>
      <FontAwesomeIcon
        icon={playing ? faPauseCircle : faPlayCircle}
        className="play"
        onClick={toggle}
      />
      <span className="time">{currentTime}</span>
      <div className="progress" />
      <span className="time">{duration}</span>
      <FontAwesomeIcon icon={faVolumeUp} className="controls" />
      <FontAwesomeIcon icon={faDownload} className="controls" />
    </div>
  );
};

AudioPlayer.propTypes = {
  audio: PropTypes.string.isRequired,
};

export default AudioPlayer;
