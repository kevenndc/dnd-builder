import React, { Component } from 'react';

class Draggable extends Component {
  constructor(props) {
    super(props);
  }

  dragStart(e) {
    //e.preventDefault();
    e.dataTransfer.setData('module_id', e.target.id);
    console.log(' dragstart', e.target.id);

    setTimeout(() => {
      e.target.style.display = 'none';
    }, 0);
  }

  render() {
    return (
      <div
        id={this.props.id}
        className="draggable-item"
        draggable="true"
        onDragStart={this.dragStart}
      >
        {this.props.children}
      </div>
    )
  }
}
export default Draggable;