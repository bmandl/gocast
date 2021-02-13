import React from "react";
import { Button } from "../../../Button/Button";
import { faShare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./comment.scss";

export const Comment = (props) => {
  return (
    <div className="comment">
      <img src={props.image} alt="" className="profile-image" />
      <div className="comment-content">
        <h4 className="author">{props.author}</h4>
        <p className="text">{props.text}</p>
      </div>
      <Button
        style="secondary"
        text={["Reply ", <FontAwesomeIcon icon={faShare} />]}
        customClass="reply" />
      <p className="date">{props.date}</p>
    </div>
  );
};
