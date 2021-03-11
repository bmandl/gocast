import { graphql, useStaticQuery } from 'gatsby';

export default () => useStaticQuery(graphql`
    {
      allMarkdownRemark {
        edges {
          node {
            id
            excerpt
            frontmatter {
              author
              date(formatString: "MMM D, YYYY")
              location
              title
              slug
            }
          }
        }
      }
    }
  `);
