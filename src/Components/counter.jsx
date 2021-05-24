import React, { Component } from "react";

export default class Counter extends Component {
  state = {
    value: this.props.counter.value,
  };

  

  handleIncrement = () => {
    this.setState({ value : this.state.value+1 })
  }

  render() {
    return (
      <div>
        <span className={this.getBadgeclass()}>{this.valuefunc()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button onClick={() => this.props.onDelete(this.props.counter.id)} 
          className="btn btn-danger btn-sm m-2">Delete</button>
      </div>
    );
  }

  getBadgeclass() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  valuefunc() {
    const { value: count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}
