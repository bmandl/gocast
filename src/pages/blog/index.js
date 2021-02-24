import React from "react";
import { graphql } from "gatsby";
import { CardGrid } from "../../components/CardGrid/CardGrid";
import PageLayout from "../../components/PageLayout/PageLayout";
import {Subscribe} from "../../components/Subscribe/Subscribe";

import "./blog.scss";

export default ({data}) => {
    const cardData = data.allMarkdownRemark.nodes;
    return (
        <PageLayout title="Blog" page>
        <section class="blog-posts">
            <h2>Blog Posts</h2>
            <div className="grid-container">
                {<CardGrid data={cardData} />}
            </div>
            <Subscribe title="New Episode Every Week!" subtitle="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed." />
        </section>
        </PageLayout>
    )
}

export const query = graphql`
{
    allMarkdownRemark {
      nodes {
        frontmatter {
          author
          date
          location
          title
        }
        excerpt(pruneLength: 200)
      }
    }
  }
`
