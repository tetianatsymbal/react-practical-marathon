import React, { Component } from 'react';
import './input.css';

export default class Input extends Component{
  constructor(props) { 
    super(props);
    this.operatorInput = React.createRef();
    this.phoneInput = React.createRef();
    this.state = {
      checkIcon: "-",
      operators: {
        "Kyivstar": [67, 68, 96, 97, 98],
        "Vodafone": [50, 66, 95, 99],
        "Lifecell": [63, 73, 93],
        "3mob": [91],
        "People.net": [92],
        "intertelecom": [89, 94]
      }
    }
  }

  componentDidMount() {
    this.operatorInput.current.focus();
  }
  findOperatorName = (operatorValue) => { 
    let operators = this.state.operators;
    const operatorName = Object.keys(operators).find((key) => {
      return operators[key].includes(+operatorValue);
    });
    if (operatorName) {
      this.setState({ operatorName });
    } else { 
      this.setState({ operatorName: "Unknown" });
    }
  }
  operatorInputHandler = (e) => {
    let input = e.target;
    let value = input.value;
    let operatorValue = value.replace(/[^0-9]/g, "");
    input.value = operatorValue;

    let regTwoNum = /[0-9]{2}/;
    if (regTwoNum.test(operatorValue)) {
      this.phoneInput.current.focus();  
      this.setState({ operatorValue })

      this.findOperatorName(operatorValue); 
    }
  }
  phoneInputHandler = (e) => { 
    let input = e.target;
    let value = input.value;
    let phoneValue = value.replace(/[^0-9]/g, "").slice(0, 7);
    input.value = phoneValue;

    let regSevenNum = /[0-9]{7}/;
    if ((this.state.operatorValue !== undefined) && regSevenNum.test(phoneValue)) {
      this.setState({ checkIcon: "✔️" })
    }
  }

  render() {
    let { checkIcon, operatorName } = this.state;
    return <div>
      <span data-testid="operator-name">{operatorName}</span>
      <span>+38 0</span>
      <input 
        ref={this.operatorInput}
        onInput={this.operatorInputHandler}
        type="text" 
        data-testid="operator-input"
        />
      <span data-testid="check-icon"> {checkIcon} </span>
      <input type="text" 
        ref={this.phoneInput}
        onInput={this.phoneInputHandler}
        data-testid="phone-input"
          />
    </div>;
  }
}
