// @flow

import React from 'react';
import { Post } from '../Post';
import './posts.scss';

export class PostList extends React.Component {
	isLoading = false;

	async componentWillUpdate(prevProps, prevState, snapshot) {
		const { routeParams, currentPage, goToPage, posts } = this.props;
		const pageId = routeParams.id || currentPage;
		const prevPageId = prevProps.currentPage;

		if (!this.isLoading && pageId !== prevPageId) {
			this.isLoading = true;
			await goToPage(pageId);
			this.isLoading = false;
		}
	}

	renderPosts = () => this.props.posts.map((post) => <Post key={post.id} {...post} />);

	render() {
		return (
			<div className="posts-wrapper">
				<div className="posts">{this.renderPosts()}</div>
			</div>
		);
	}
}
