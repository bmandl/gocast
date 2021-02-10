import React from "react";

import "./_home.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaypal } from "@fortawesome/free-brands-svg-icons";
import { AudioPlayer } from "../../components/AudioPlayer/AudioPlayer";
import {Logo} from "../../components/Logo/Logo";

/*export const Home = () => {
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
}*/

ReactDOM.render(<Logo />,document.getElementsByClassName("logo"));
ReactDOM.render(<Button type="primary" text="Subscribe" />,document.getElementsByClassName("cta-top"));
ReactDOM.render(<Button type="secondary" text={["Donate",<FontAwesomeIcon icon={faPaypal} />]} />,document.getElementsByClassName("cta-top"));
ReactDOM.render(<AudioPlayer />,document.getElementsByClassName("audio-player"));