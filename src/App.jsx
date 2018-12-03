// @flow

import React, { Component } from "react";
import "./App.scss";
import { PostsLink } from "./containers/PostsLink";
import { HeaderLink } from "./containers/HeaderLink";

export class App extends Component {
  render() {
    return (
      <div className="app">
        <HeaderLink routeParams={this.props.match.params} />
        <PostsLink routeParams={this.props.match.params} />
      </div>
    );
  }
}
