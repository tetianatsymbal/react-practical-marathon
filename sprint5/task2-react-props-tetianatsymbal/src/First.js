import React from "react";

export default class First extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <li>{this.props.listArr[0]}</li>
      </div>
    );
  }
}
