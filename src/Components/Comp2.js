import React from "react";

class Comp2 extends React.Component {
  render() {
    const { moveFocus } = this.props;
    return (
      <div>
        <button onClick={moveFocus}>Move</button>
      </div>
    );
  }
}

export default Comp2;
