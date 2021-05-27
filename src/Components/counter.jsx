import React, { Component } from "react";

export default class Counter extends Component {
  render() {
    return (
      <div>
        <span className={this.getBadgeclass()}>{this.valuefunc()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeclass() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  valuefunc() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}
