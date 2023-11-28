import React from "react";

class User extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      count2: 10,
    };
  }

  render() {
    return (
      <div>
        <h1>Inside User class component</h1>
        <h2>{this.props.name}</h2>
        <h2>Count: {this.state.count}</h2>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Increment
        </button>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count - 1,
            });
          }}
        >
          Decrement
        </button>
      </div>
    );
  }
}

export default User;
