// @flow

import React, { Component } from "react";
import { DateTime } from "luxon";
import { FaEye, FaCalendarTimes } from "react-icons/fa";
import "./post.scss";
import { PostLoader } from "./PostLoader";

type Props = {
  isLoading: boolean,
  title: string,
  description: string,
  timestamp: number,
  clicks_count: number,
  source: {
    link: string,
    title: string
  },
  link: string
};

type State = {
  count: number
};

export class Post extends Component<Props, State> {
  render() {
    const {
      isLoading,
      title,
      description,
      timestamp,
      clicks_count,
      source,
      link
    } = this.props;

    if (isLoading) {
      return <PostLoader className="post" />;
    }

    const datetime = DateTime.fromMillis(timestamp * 1000).toLocaleString(
      DateTime.DATE_MED
    );

    return (
      <div className="post">
        <div className="header">
          <a href={link} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        </div>
        <div className="content">
          <div
            dangerouslySetInnerHTML={{
              __html: description
            }}
          />
        </div>
        <div className="footer">
          <div className="footer-bottom">
            <div className="datetime">
              <FaCalendarTimes /> {datetime}
            </div>
            <div className="views">
              <FaEye /> {clicks_count}
            </div>
            by @
            <div className="source-name">
              <a href={source.link} target="_blank" rel="noopener noreferrer">
                {source.title}
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
