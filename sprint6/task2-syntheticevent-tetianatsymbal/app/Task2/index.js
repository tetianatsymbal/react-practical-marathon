import React, { Component } from "react";

export default class Task2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [
        {
          id: 1,
          text: "hidden text 1",
        },
        {
          id: 2,
          text: "hidden text 2",
        },
        {
          id: 3,
          text: "hidden text 3",
        },
      ],
      text: "",
    };
  }
  handlerMouseEnter = (e) => {
    this.setState({
      text: e.target.getAttribute("text"),
    });
  };
  handlerMouseLeave = () => {
    this.setState({
      text: "",
    });
  };
  render() {
    const { list, text } = this.state;
    return (
      <div>
        <ul>
          {list.map((el) => (
            <li
              className="element"
              id={el.id}
              key={el.id}
              text={el.text}
              onMouseEnter={this.handlerMouseEnter}
              onMouseLeave={this.handlerMouseLeave}
            >
              id - {el.id}
            </li>
          ))}
        </ul>

        <div data-testid="text">{text}</div>
      </div>
    );
  }
}
