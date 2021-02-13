import React, { useState } from "react";
import { CardGrid } from "../../components/CardGrid/CardGrid";
import {Subscribe} from "../../components/Subscribe/Subscribe";

import "./blog.scss";

export const Blog = () => {
    const [data, getData] = useState(
        [
            {
                id: 0,
                title: "Global News Podcast Thai soldier kills many people a shooting rampage",
                text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore ………..",
                meta: {
                    author: "Rose Lucas",
                    date: "Sep 11, 2020",
                    location: "Cantonese Radio"
                }
            },
            {
                id: 1,
                title: "News hour - World Health Organization says a new coronavirus cases slowed",
                text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore ………..",
                meta: {
                    author: "Eliza Ortiz",
                    date: "Sep 11, 2020",
                    location: "Cantonese Radio"
                }
            },
            {
                id: 2,
                title: "Over to You - Programme face the axe substantial financial cutbacks",
                text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore ………..",
                meta: {
                    author: "Carol Smith",
                    date: "Sep 11, 2020",
                    location: "Cantonese Radio"
                }
            },
            {
                id: 3,
                title: "Global News Podcast Thai soldier kills many people a shooting rampage",
                text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore ………..",
                meta: {
                    author: "Rose Lucas",
                    date: "Sep 11, 2020",
                    location: "Cantonese Radio"
                }
            },
            {
                id: 4,
                title: "News hour - World Health Organization says a new coronavirus cases slowed",
                text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore ………..",
                meta: {
                    author: "Eliza Ortiz",
                    date: "Sep 11, 2020",
                    location: "Cantonese Radio"
                }
            },
            {
                id: 5,
                title: "Over to You - Programme face the axe substantial financial cutbacks",
                text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore ………..",
                meta: {
                    author: "Carol Smith",
                    date: "Sep 11, 2020",
                    location: "Cantonese Radio"
                }
            }
        ]
    )
    return (
        <section class="blog-posts">
            <h2>Blog Posts</h2>
            <div className="grid-container">
                <CardGrid data={data} />
            </div>
            <Subscribe title="New Episode Every Week!" subtitle="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed." />
        </section>
    )
}