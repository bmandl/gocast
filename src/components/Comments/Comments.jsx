import React, { useState,useEffect } from "react";
import {Comment} from "./components/Comment/Comment";

import "./comments.scss";
import { Button } from "../Button/Button";

export const Comments = (props) => {
    const [comments, getComments] = useState([]);

    useEffect(() => {
        getComments(props.comments.map((comment,index) => <Comment author={comment.author} text={comment.text} date={comment.date} image={comment.image} key={index} />));
    },[]);

    return (
        <section className="comments">
            <h3>Comments</h3>
        <div className="comments-container">
            {comments.length? comments : "No comments to display"}
        </div>

        <div className="form-reply">            
        <h3>Leave a reply</h3>
        <form action="#">
            <textarea name="reply" id="reply" cols="30" rows="10" placeholder="Your Reply"></textarea>
            <input type="text" name="name" placeholder="Your Name" />
            <input type="email" name="email" placeholder="Your Email" />
            <input type="checkbox" id="save" name="save" /><label htmlFor="save">Save my name, email, and website in this
                browser for the next time I comment.</label>
            <Button type="submit" style="primary" text="Post Comment" />
        </form>
    </div>
    </section>
    )
}