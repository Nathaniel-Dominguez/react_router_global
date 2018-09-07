import React, { Component } from 'react';
import Comment from './Comment';

class Post extends Component {

  render(props) {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h3>  -<em>{this.props.author}</em></h3>
        <p>{this.props.body}</p>
          {this.props.comments.map( comment => {
            return <Comment content={comment} />
          })}
      </div>
    );
  }
}

export default Post;