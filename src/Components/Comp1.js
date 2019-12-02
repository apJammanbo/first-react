import React from "react";
import Comp3 from "./Comp3";

class Comp1 extends React.Component {
  constructor() {
    super();
    this.state = {
      number: 0,
      test: () => {
        console.log("1");
      }
    };
    this.comp3Element = React.createRef();
  }

  focus = () => {
    this.comp3Element.current.focus();
  };

  componentDidMount() {
    console.log("componentDidMount");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  handleAdd = addNumber => {
    const { number } = this.state;
    this.setState({
      number: number + addNumber
    });
  };

  render() {
    const { number } = this.state;
    return (
      <>
        <div>
          {`Comp1 ${number}`}
          <button onClick={() => this.handleAdd(2)}>Add</button>
        </div>
        <Comp3
          ref={this.comp3Element}
          number={number}
          onAdd={this.handleAdd}
        ></Comp3>
      </>
    );
  }
}

export default Comp1;
