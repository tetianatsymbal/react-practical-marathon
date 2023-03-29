import React, { Component } from "react";

export default class Task1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: null,
      isLoaded: false,
    };
  }
  componentDidMount() {
    fetch("http://127.0.0.1:3000/list")
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        this.setState({ list: result, isLoaded: true });
      });
  }
  render() {
    const { list, isLoaded } = this.state;
    if (!isLoaded) {
      return (
        <div className="border">
          <p>Loading...</p>
        </div>
      );
    } else {
      return (
        <div className="row">
          {list.map((item) => (
            <div key={item.id} className="border col col-2">
              id - {item.id}
              <br />
              name - {item.name}
              <br />
              note - {item.note}
            </div>
          ))}
        </div>
      );
    }
  }
}
