/* eslint-disable react/no-danger */
import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Comments from '../../components/Comments/Comments';
import PageLayout from '../../components/PageLayout/PageLayout';

import './post.scss';

export default function Post({ data }) {
  const metaData = data.markdownRemark.frontmatter;
  const content = data.markdownRemark.html;

  return (
    <PageLayout page={false}>
      <section className="post-content">
        <h2>{metaData.title}</h2>
        <div className="meta-data">
          <span className="author">{metaData.author}</span>
          <span className="date">{metaData.date}</span>
          <span className="location">{metaData.location}</span>
        </div>
        <div className="post-text" dangerouslySetInnerHTML={{ __html: content }} />
      </section>
      <Comments />
    </PageLayout>
  );
}

Post.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.objectOf({
      frontmatter: PropTypes.objectOf({
        author: PropTypes.string,
        date: PropTypes.instanceOf(Date),
        title: PropTypes.string,
        location: PropTypes.string,
      }),
      html: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export const query = graphql`
  {
    markdownRemark {
      frontmatter {
        author
        date(formatString: "MMM D, YYYY")
        title
        location
      }
      html
    }
  }
`;
