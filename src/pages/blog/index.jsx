import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import CardGrid from '../../components/CardGrid/CardGrid';
import PageLayout from '../../components/PageLayout/PageLayout';
import Subscribe from '../../components/Subscribe/Subscribe';

import './blog.scss';

export default function Blog({ data }) {
  const cardData = data.allMarkdownRemark.nodes;
  return (
    <PageLayout title="Blog" page>
      <section className="blog-posts">
        <h2>Blog Posts</h2>
        <div className="grid-container">
          <CardGrid data={cardData} />
        </div>
        <Subscribe
          title="New Episode Every Week!"
          subtitle="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed."
        />
      </section>
    </PageLayout>
  );
}

Blog.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.objectOf({
      nodes: PropTypes.arrayOf({
        frontmatter: PropTypes.objectOf({
          author: PropTypes.string,
          date: PropTypes.instanceOf(Date),
          location: PropTypes.string,
          title: PropTypes.string,
          slug: PropTypes.string,
        }),
        excerpt: PropTypes.string.isRequired,
      }),
    }),
  }).isRequired,
};

export const query = graphql`
  {
    allMarkdownRemark {
      nodes {
        frontmatter {
          author
          date(formatString: "MMM D, YYYY")
          location
          title
          slug
        }
        excerpt(pruneLength: 200)
      }
    }
  }
`;
