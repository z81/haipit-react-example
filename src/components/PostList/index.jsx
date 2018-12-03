// @flow

import React from "react";
import { Post } from "../Post";
import "./posts.scss";

export class PostList extends React.Component {
  componentDidMount() {
    this.props.goToPage(this.props.currentPage);
  }

  renderPosts() {
    const { posts } = this.props;

    return posts.map(post => <Post key={post.id} {...post} />);
  }

  render() {
    return (
      <div className="posts-wrapper">
        <div className="posts">{this.renderPosts()}</div>
      </div>
    );
  }
}
