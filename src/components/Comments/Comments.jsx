import React, { useState, useEffect } from 'react';

import Comment from './components/Comment/Comment';
import Button from '../Button/Button';

import './comments.scss';

const Comments = () => {
  const [comments, setComments] = useState([
    {
      id: 0,
      author: 'Anthony Lynch',
      image: '/images/profile.png',
      date: new Date('15 June 2019'),
      text:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy sdaa eirmod tempor invidunt ut labore et .',
    },
    {
      id: 1,
      author: 'Anthony Lynch',
      image: '/images/profile.png',
      date: new Date('15 June 2019'),
      text:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy sdaa eirmod tempor invidunt ut labore et .',
    },
    {
      id: 3,
      author: 'Anthony Lynch',
      image: '/images/profile.png',
      date: new Date('15 June 2019'),
      text:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy sdaa eirmod tempor invidunt ut labore et .',
    },
  ]);

  /* useEffect(() => {
    setComments(
      Array.from(comments, (comment) => (
        <Comment
          author={comment.author}
          text={comment.text}
          date={comment.date}
          image={comment.image}
          key={comment.id}
        />
      )),
    );
  }, []); */

  return (
    <section className="comments">
      <h3>Comments</h3>
      <div className="comments-container">
        {comments.length
          ? Array.from(comments, (comment) => (
            <Comment
              author={comment.author}
              text={comment.text}
              date={comment.date}
              image={comment.image}
              key={comment.id}
            />
          ))
          : 'No comments to display'}
      </div>
      <div className="form-reply">
        <h3>Leave a reply</h3>
        <form action="#">
          <textarea name="reply" id="reply" cols="30" rows="10" placeholder="Your Reply" />
          <input type="text" name="name" placeholder="Your Name" />
          <input type="email" name="email" placeholder="Your Email" />
          <label htmlFor="save">
            <input type="checkbox" id="save" name="save" />
            Save my name, email, and website in this browser for the next time I comment.
          </label>
          <Button submit styling="primary" text="Post Comment" />
        </form>
      </div>
    </section>
  );
};

export default Comments;
