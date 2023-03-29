import React from "react";
import "./App.css";
import First from "./First";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        { id: 1, text: "Animals" },
        { id: 2, text: "Anime" },
        { id: 3, text: "Anti-Malware" },
        { id: 4, text: "Art Design" },
        { id: 5, text: "Books" },
        { id: 6, text: "Business" },
        { id: 7, text: "Calendar" },
        { id: 8, text: "Cloud Storage" },
        { id: 9, text: "File Sharing" },
        { id: 10, text: "Animals" },
        { id: 11, text: "Continuous Integration" },
        { id: 12, text: "Cryptocurrency" },
      ],
    };
  }
  render() {
    const list = this.state.list.map((el) => el.text.toLowerCase());
    return (
      <div>
        Some data:
        <ul>
          <First listArr={list} />
        </ul>
      </div>
    );
  }
}
