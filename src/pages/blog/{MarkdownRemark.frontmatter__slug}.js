
import React, { useState } from "react";
import { graphql } from "gatsby";

import {Comments} from "../../components/Comments/Comments";
import PageLayout from "../../components/PageLayout/PageLayout";

import "./post.scss";

export default function Post({data}) {
    const [comments, getComments] = useState([
        {
            id: 0,
            author: "Anthony Lynch",
            image: "/images/profile.png",
            date: "15 June 2019",
            text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy sdaa eirmod tempor invidunt ut labore et ."
        },
        {
            id: 1,
            author: "Anthony Lynch",
            image: "/images/profile.png",
            date: "15 June 2019",
            text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy sdaa eirmod tempor invidunt ut labore et ."
        },
        {
            id: 3,
            author: "Anthony Lynch",
            image: "/images/profile.png",
            date: "15 June 2019",
            text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy sdaa eirmod tempor invidunt ut labore et ."
        }
    ]);
    const metaData = data.markdownRemark.frontmatter;
    const content = data.markdownRemark.html;

    return (
        <PageLayout>
            <section className="post-content">

                <h2>{metaData.title}</h2>
                <div className="meta-data">
                    <span className="author">{metaData.author}</span>
                    <span className="date">{metaData.date}</span>
                    <span className="location">{metaData.location}</span>
                </div>
                <div className="post-text" dangerouslySetInnerHTML={{__html:content}} />
            </section>
            <Comments comments={comments} />
        </PageLayout>
    )
}

export const query = graphql`
{
    markdownRemark {
      frontmatter {
        author
        date
        title
        location
      }
      html
    }
  }
`