import React, { Component } from 'react';

class DropZone extends Component {
  constructor(props) {
    super(props);
  }

  /**
   * Handles the ondrop event by appending the dragged elemento to the drop zone
   * @param {Event} e 
   */
  drop(e) {
    //console.log(typeof e);
    e.preventDefault();

    // get the 
    const moduleId = e.dataTransfer.getData('module_id');
    console.log(moduleId);
    const $module = document.getElementById(moduleId);

    e.target.appendChild($module);

    $module.style.display = 'block';
  }

  dragOver(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  }

  render() {
    return (
      <div
        className="drop-zone"
        onDrop={this.drop} 
        onDragOver={this.dragOver} 
      >
        {this.props.children}
      </div>
    )
  }
}

export default DropZone;