import React from "react";
import Comp1 from "./Components/Comp1";
import Comp2 from "./Components/Comp2";

class App extends React.Component {
  constructor() {
    super();
    this.comp1Element = React.createRef();
  }
  handleMoveFocus = () => {
    this.comp1Element.current.focus();
  };
  render() {
    console.log("render App");
    return (
      <>
        <Comp1 ref={this.comp1Element} />
        <Comp2 moveFocus={this.handleMoveFocus} />
      </>
    );
  }
}

export default App;
