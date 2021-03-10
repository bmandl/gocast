/* eslint-disable jsx-a11y/anchor-is-valid */
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import PageLayout from '../../components/PageLayout/PageLayout';
import Slider from '../../components/Slider/Slider';
import Subscribe from '../../components/Subscribe/Subscribe';

import './about.scss';

export default () => (
  <PageLayout title="About Me" page>
    <section className="about">
      <div className="about-text">
        <h2>Hello There My Name is Gerry Castin And I Love To Talk (Most Of The Time)</h2>

        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
          invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
          accusam et justo duo dolores et ea rebum. Stet clita
        </p>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
          invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
          accusam et justo duo dolores et ea rebum. Stet clita
        </p>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
          invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
          accusam et justo duo dolores et ea rebum. Stet clita
        </p>
      </div>
      <img src="/images/me.png" alt="" className="me" />
    </section>

    <section className="featured">
      <h2>I Have Been Featured in</h2>
      <ul className="brands">
        <li>
          <a href="#">
            <img src="/images/amara.svg" alt="amara" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src="/images/aven.svg" alt="aven" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src="/images/circle.svg" alt="circle" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src="/images/earth-2.0.svg" alt="earth" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src="/images/fox-hub.svg" alt="fox-hub" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src="/images/goldline.svg" alt="goldline" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src="/images/kanba.svg" alt="kanba" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src="/images/kyan.svg" alt="kyan" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src="/images/muzica.svg" alt="muzica" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src="/images/nirastate.svg" alt="nirastate" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src="/images/treva.svg" alt="treva" />
          </a>
        </li>
      </ul>
    </section>

    <section className="mailing">
      <h2>Directly Into Your Inbox Every Monday</h2>
      <p>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
        invidunt ut dolore kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
        Lorem ipsum dolor sit amet,
      </p>
      <div className="video-container">
        <FontAwesomeIcon icon={faPlayCircle} className="play-video" />
        <img src="/images/video.png" alt="" className="video" />
      </div>
    </section>
    <Slider title="Blog Posts" />
    <Subscribe
      title="New Episode Every Week!"
      subtitle="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed."
    />
  </PageLayout>
);
