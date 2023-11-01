import React from "react";

class ClassComponentPropsAndStates extends React.Component {
  constructor(props) {
    super(props);
  }

  state = { counter: 0 };

  handleIncrementCounter = () => {
    this.setState({ counter: this.state.counter + 1 });
  };
  render() {
    return (
      <div>
        <button onClick={this.handleIncrementCounter}>
          {this.props.buttonName}
        </button>
        <br></br>
        {this.state.counter}
      </div>
    );
  }
}

export default ClassComponentPropsAndStates;
