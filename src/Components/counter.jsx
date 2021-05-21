import React, { Component } from "react";

export default class Counter extends Component {

    state ={
        count:1
    }

    render() {
        return (
        <div>
            <span className={this.getBadgeclass()}>{this.func()}</span>
            <button className="btn btn-secondary btn-sm">Increment</button>
        </div>
        );
  }

    getBadgeclass() {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }

  func(){
      const {count} = this.state
      return count === 0 ? "Zero" : count
  }
}
