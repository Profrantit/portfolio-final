import React, { Component } from "react";

class Handle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      comment: "",
      topic: ""
    };
  }
  handleUsernameChange = event => {
    this.setState({
      username: event.target.value
    });
  };
  handleCommentChange = event => {
    this.setState({
      message: event.target.value
    });
  };
  handleTopicChange = event => {
    this.setState({
      topic: event.target.value
    });
  };
  render() {
    return (
      <form>
        <div>
          <label>username</label>
          <input
            type="text"
            value={this.state.username}
            onChange={this.handleUsernameChange}
          />
        </div>
        <div>
          <label>comments</label>
          <textarea
            value={this.state.comments}
            onChange={this.handleCommentChange}
          ></textarea>
        </div>
        <div>
          <label>topic</label>
          <select value={this.state.topic} onChange={this.handleTopicChange}>
            <option value="react">React</option>
            <option value="angular">Angular</option>
            <option value="vue">Vue</option>
          </select>
        </div>
      </form>
    );
  }
}

export default Handle;
