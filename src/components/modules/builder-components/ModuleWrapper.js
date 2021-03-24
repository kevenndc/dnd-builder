import React, { useState } from 'react';

export default function ModuleWrapper(props) {
  const [isMouseOver, setMouseOver] = useState(false);
  const [isDragging, setDragging] = useState(false);

  const getModuleId = () => props.id;

  /**
   * Handles the dragstart event
   * 
   * @link https://www.w3schools.com/jsref/event_ondragstart.asp
   */
   const dragStart = e => {
    // set the ModuleWrapper id to the data transfer so it can be used to append the whole module to the new drop zone
    e.dataTransfer.setData('module_id', getModuleId());

    // update the isDragging state to true so that the origin ModuleWapper is hidden while dragging
    setTimeout(() => {
      setDragging(true);
    }, 0)  
  }

  return (
    <div
      draggable="true"
      id={getModuleId()}
      className={`dnd__module-wrapper ${isDragging ? 'd-none': ''}`} 
      onMouseEnter={() => setMouseOver(true)} 
      onMouseLeave={() => setMouseOver(false)}
      onDragStart={dragStart}
      onDragEnd={() => setDragging(false)}
    >
      {/* If mouse is over the module, show the module options */}
      {isMouseOver && (
      <div className="dnd__module-wrapper--options">
        <span>Config</span>
        <span>Drag</span>
      </div>
      )}
        
      {props.children}
      
    </div>
  )
}