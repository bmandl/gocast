import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import './hero.scss';
import hero from './img/header-img.png';
import AudioPlayer from '../../../AudioPlayer/AudioPlayer';

const Hero = () => {
  const {
    allEpisodesJson: { nodes: allEpisodes },
  } = useStaticQuery(graphql`
    {
      allEpisodesJson {
        nodes {
          title
          audio {
            publicURL
          }
          date(formatString: "MMM D, YYYY")
          tags
          text
          season
          image {
            publicURL
          }
        }
      }
    }
  `);

  return (
    <>
      <div className="hero">
        <div className="orange-text">
          <span>Trending Episode</span>
        </div>
        <h1>Dreams of an unique ideas scattered through a deserted.</h1>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
          invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
        </p>
        <AudioPlayer audio={allEpisodes[0].audio.publicURL} />
      </div>
      <img alt="hero" src={hero} className="big-image" />
    </>
  );
};

export default Hero;
