import React, { Component } from "react";
import { addNewPost } from "./actions";
import { connect } from "react-redux";

// TODO Import `connect()`, write a `mapState()` function that extracts the
// TODO data this component needs, and default-export the connected component.
// TODO Be sure to hook up `addNewPost()` so the component can dispatch the action.
const mapState = (state) => { 
   return {
     authors: state.authors
  }
}

const mapDispatch = (dispatch) => {
  return {
    addNewPost: (selectedAuthor, title) => {
      dispatch(addNewPost(selectedAuthor, title));
    }
  }
};

export class NewPostForm extends Component {
  state = {
    title: "",
    selectedAuthor: null,
  };

  onSelectedAuthorChanged = (e) => {
    const { value } = e.target;
    this.setState({ selectedAuthor: value || null });
  };

  onPostTitleChanged = (e) => {
    const { value } = e.target;
    this.setState({ title: value });
  };

  onAddNewPostClicked = () => {
    // TODO Dispatch an action with the title and the selected author ID,
    // TODO using the `addNewPost()` action creator.  Afterwards, clear the post title field by
    // TODO setting it to an empty string.
    // TODO Only dispatch if the selected author isn't null, and
    // TODO the current post title isn't an empty string
    if (this.state.selectedAuthor && this.state.title.trim()) {
      this.props.addNewPost(this.state.selectedAuthor, this.state.title);
    }
    this.setState({ title: "" });
  };

  render() {
    const { title = "", selectedAuthor = null } = this.state;
    const authors = this.props.authors || [];
    
    const authorsOptions = authors.map((author) => (
      <option key={author.authorId} value={author.authorId}>
        {author.name}
      </option>
    ));

    // Add an empty selection option
    authorsOptions.unshift(<option key="empty" value="" />);

    return (
      <div>
        <h4>New Post</h4>
        <input type="text" onChange={this.onPostTitleChanged} value={title} />
        <div>
          Author:{" "}
          <select
            value={selectedAuthor || ""}
            onChange={this.onSelectedAuthorChanged}
          >
            {authorsOptions}
          </select>
        </div>
        <div>
          <button onClick={this.onAddNewPostClicked}>Add New Post</button>
        </div>
      </div>
    );
  }
}

export default connect(mapState, mapDispatch)(NewPostForm);
