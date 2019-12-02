import React from "react";

class Comp3 extends React.Component {
  constructor() {
    super();
    this.state = {
      inputNumber: null
    };
    this.inputElement1 = React.createRef();
    this.inputElement2 = React.createRef();
  }

  handleAdd = () => {
    const { onAdd } = this.props;
    const { inputNumber } = this.state;
    if (inputNumber) {
      onAdd(Number(inputNumber));
    }

    // 인풋으로 포커스를 주면됨

    this.inputElement1.current.focus();
  };

  handleChangeInput = event => {
    const {
      target: { value: number }
    } = event;
    this.setState({
      inputNumber: number
    });
  };

  render() {
    const { inputNumber } = this.state;
    const { number } = this.props;
    return (
      <>
        <div>{`Comp3 ${number}`}</div>
        <input
          ref={this.inputElement1}
          type="number"
          value={inputNumber}
          onChange={this.handleChangeInput}
        ></input>
        <button onClick={this.handleAdd}>add</button>
        <input
          ref={this.inputElement2}
          type="number"
          value={inputNumber}
          onChange={this.handleChangeInput}
        ></input>
        <button onClick={this.handleAdd}>add</button>
      </>
    );
  }
}

export default Comp3;
