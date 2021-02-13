import React, { useEffect, useState } from "react";
import {Card} from "../Card/Card";

import "./CardGrid.scss";

export const CardGrid = (props) => {
    const [data,getData] = useState([]);

    useEffect(() => {
        getPosts(props.data);
    },[]);

    const cards = data.map((card, index) => <Card data={card} key={index} />);

    return (
        <div className="card-grid">
            {cards}
        </div>
    )
}