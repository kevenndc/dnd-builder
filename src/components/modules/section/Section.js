import React from 'react';

export default function Section(props) {
  return (
    <div className="dnd__module dnd__section">
      {props.children}
    </div>
  );
}