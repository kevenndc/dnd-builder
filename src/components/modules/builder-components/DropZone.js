import React, { useState } from 'react';

export default function DropZone(props) {
  const [isDragOver, setDragOver] = useState(false);

  /**
   * Handles the ondrop event by appending the dragged elemento to the drop zone
   * @param {Event} e 
   */
  const drop = e => {
    e.preventDefault();

    // get the id of the module tha will be appended in this drop zone
    const moduleId = e.dataTransfer.getData('module_id');
    const $module = document.getElementById(moduleId);

    e.target.appendChild($module);

    $module.style.display = 'block';
  }

  const dragOver = e => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  }

  return (
    <div
      className={`drop-zone ${isDragOver ? 'dropzone--isover' : ''}`}
      onDrop={drop} 
      onDragEnter={() => setDragOver(true)}
      onDragLeave={() => setDragOver(false)}
      onDragOver={dragOver} 
    >
      {props.children}
    </div>
  )
}