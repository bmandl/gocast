import React from 'react';
import Episodes from '../components/Episodes/Episodes';

import './home.scss';

import Slider from '../components/Slider/Slider';
import Carousel from '../components/Carousel/Carousel';
import Subscribe from '../components/Subscribe/Subscribe';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import PostsQuery from '../services/queries/blogPosts';

export default () => {
  let {
    allMarkdownRemark: { edges: slides },
  } = PostsQuery();

  slides = slides.map((slide) => slide.node);
  return (
    <>
      <Header hero />
      <Episodes title="Latest Episodes" latest />
      <Slider title="Blog Posts" slides={slides} />
      <Carousel />
      <Subscribe
        title="New Episode Every Week!"
        subtitle="Loremipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed."
      />
      <Footer />
    </>
  );
};
