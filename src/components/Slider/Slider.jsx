import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useStaticQuery, graphql } from "gatsby";
import React from "react";
import { Card } from "../Card/Card";

import "./slider.scss";

export const Slider = (props) => {
    
    const cardData = useStaticQuery(graphql`
    {
      allMarkdownRemark(limit: 3) {
        edges {
          node {
            excerpt
            frontmatter {
              author
              date
              location
              title
            }
          }
        }
      }
    }
  `)

    const cards = cardData.allMarkdownRemark.edges.map((card, index) => <Card data={card.node} key={index} />);
    return (
        <div className="slider-container">
            <h2>{props.title}</h2>
            <div className="slider">
                {cards}
            </div>
            <div className="arrows">
                <a href=""><FontAwesomeIcon icon={faArrowLeft} /></a>
                <a href=""><FontAwesomeIcon icon={faArrowRight} /></a>
            </div>
        </div>
    )
}