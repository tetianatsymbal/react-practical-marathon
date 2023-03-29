import React from "react";
import "./App.css";

export default class App extends React.Component {
  state = {
    appData: "React Marathon",
  };

  onChangeClick = () => {
    this.setState((prev) => ({
      appData: prev.appData.toLowerCase(),
    }));
  };

  render() {
    return <div onClick={this.onChangeClick}> {this.state.appData} </div>;
  }
}
