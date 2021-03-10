import React from 'react';
import PropTypes from 'prop-types';

import AudioPlayer from '../../../AudioPlayer/AudioPlayer';

import './_episode.scss';

const Episode = ({
  image, title, text, audio, season, date, tags,
}) => (
  <div className="episode">
    <img alt="Episode" src={image} />
    <div className="episode-content">
      <h3>{title}</h3>
      <p>{text}</p>
      <AudioPlayer audio={audio} />
    </div>
    <div className="meta">
      <span className="tag">{`Season ${season}`}</span>
      <span className="tag">{`Posted on ${date}`}</span>
      <span className="tag">{tags.join(' / ')}</span>
    </div>
  </div>
);

Episode.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  audio: PropTypes.string.isRequired,
  season: PropTypes.string.isRequired,
  date: PropTypes.instanceOf(Date).isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Episode;
