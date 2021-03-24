import React, { Component } from 'react';

class ModuleWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMouseOver: false,
      isDragging: false,
    }

    this.showOptions = this.showOptions.bind(this);
    this.hideOptions = this.hideOptions.bind(this);
    this.dragStart = this.dragStart.bind(this);
    this.dragEnd = this.dragEnd.bind(this);
    }

  /**
   * Handles the dragstart event
   * 
   * @link https://www.w3schools.com/jsref/event_ondragstart.asp
   */
  dragStart(e) {
    // set the ModuleWrapper id to the data transfer so it can be used to append the whole module to the new drop zone
    e.dataTransfer.setData('module_id', this.getModuleId());

    // update the isDragging state to true so that the origin ModuleWapper is hidden while dragging
    setTimeout(() => {
      this.setState(prevState => {
        return {
          ...prevState,
          isDragging: true,
        }
      });
    }, 0)  
  }
  
  /**
   * Handles the dragend event
   * 
   * @link https://www.w3schools.com/jsref/event_ondragstart.asp
   */
  dragEnd(e) {
    this.setState(prevState => {
      return {
        ...prevState,
        isDragging: false,
      }
    });
  }

  getModuleId() {
    return this.props.id;
  }
  showOptions() {
    this.setState({
      isMouseOver: true
    });
  }

  hideOptions() {
    this.setState({
      isMouseOver: false
    });
  }

  render() {
    return (
      <div
        draggable="true"
        id={this.getModuleId()}
        className={`dnd__module-wrapper ${this.state.isDragging ? 'd-none': ''}`} 
        onMouseEnter={this.showOptions} 
        onMouseLeave={this.hideOptions}
        onDragStart={this.dragStart}
        onDragEnd={this.dragEnd}
      >
        {/* If mouse is over the module, show the module options */}
        {this.state.isMouseOver && (
        <div className="dnd__module-wrapper--options">
          <span>Config</span>
          <span>Drag</span>
        </div>
        )}
          
        {this.props.children}
        
      </div>
    )
  }
}

export default ModuleWrapper;