import React, {Component} from "react";

import store from "./store";

export default class PostsList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            // TODO Get the posts and users lists from the store instead
            posts : store.getState().posts,
            authors : store.getState().authors,
        };
        // TODO subscribe to the store
        store.subscribe(this.onStoreUpdated);
    }

    onStoreUpdated = () => {
        // TODO Update the list of posts and users in state to re-render
        const { authors, posts } = store.getState();
        this.setState({
            posts,
            authors
        })
    }

    render() {
        const {posts, authors} = this.state;

        const renderedPosts = posts.map(post => {
            const author = authors.find(author => author.authorId === post.authorId) || {name : "Unknown"};
            const {name} = author;

            return <li key={post.id }>{post.title}, by {name}</li>;
        });

        return (
            <div>
                <h4>Posts</h4>
                <ul>
                    {renderedPosts}
                </ul>
            </div>
        );
    }
}
