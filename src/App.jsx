// @flow

import React, { Component } from "react";
import "./App.scss";
import { PostsLink } from "./containers/PostsLink";
import { HeaderLink } from "./containers/HeaderLink";

export class App extends Component {
  render() {
    return (
      <main className="app">
        <section>
          <HeaderLink routeParams={this.props.match.params} />
          <PostsLink routeParams={this.props.match.params} />
        </section>
      </main>
    );
  }
}
