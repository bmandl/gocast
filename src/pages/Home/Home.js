import React from "react";
import { Episodes } from "../../components/Episodes/Episodes";

import "../style.scss";
import { Slider } from "../../components/Slider/Slider";
import { Carousel } from "../../components/Carousel/Carousel";
import { Subscribe } from "../../components/Subscribe/Subscribe";

export const Home = () => {
    const episodes = [
        {
            id: 0,
            img: "/images/dog.png",
            title: "Visiting my best friend's city for first time",
            text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam , sed diam voluptua.",
            tags: [
                "Season 1",
                "Posted on Sep 3, 2020",
                "audio / goodbyes / life"
            ]
        },
        {
            id: 1,
            img: "/images/book.png",
            title: "An interesting read I definitely recommend",
            text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam , sed diam voluptua.",
            tags: [
                "Season 1",
                "Posted on July 29, 2020",
                "audio / goodbyes / life"
            ]
        },
        {
            id: 2,
            img: "/images/door.png",
            title: "What if all my adventures go back home?",
            text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam , sed diam voluptua.",
            tags: [
                "Season 1",
                "Posted on Sep 11, 2020",
                "audio / goodbyes / life"
            ]
        }
    ]

    return (
        <>
            <Episodes title="Latest Episodes" latest={true} episodes={episodes} />
            <Slider title="Blog Posts" />
            <Carousel />
            <Subscribe />
        </>
    )
}