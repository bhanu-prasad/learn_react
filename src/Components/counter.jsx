import React, { Component } from "react";

export default class Counter extends Component {
  state = {
    value: this.props.value,
  };

  

  handleIncrement = () => {
    this.setState({ value : this.state.value+1 })
  }

  render() {
    return (
      <div>
        <span className={this.getBadgeclass()}>{this.func()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </div>
    );
  }

  getBadgeclass() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  func() {
    const { value: count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}
