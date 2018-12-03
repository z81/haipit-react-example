import React, { Component } from "react";
import ContentLoader from "react-content-loader";

export const PostLoader = props => (
  <ContentLoader
    height={300}
    width={300}
    speed={2}
    primaryColor="#1a1f2d"
    secondaryColor="#2a2f3d"
    {...props}
  >
    <rect x="0" y="0" width="300" height="30" />
    <rect x="0" y="35" width="300" height="230" />
    <rect x="0" y="270" width="70" height="30" />
    <rect x="75" y="270" width="40" height="30" />
    <rect x="120" y="270" width="180" height="30" />
  </ContentLoader>
);
