import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const PageLayout = ({
  hero, page, title, children,
}) => (
  <>
    <Header hero={hero} page={page} title={title} />
    {children}
    <Footer />
  </>
);

PageLayout.propTypes = {
  hero: PropTypes.bool,
  page: PropTypes.bool,
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

PageLayout.defaultProps = {
  hero: false,
  page: true,
};

export default PageLayout;
