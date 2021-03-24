import React from 'react';

export default function Section(props) {
  return (
    <div className="dnd__module">
      {props.children}
    </div>
  );
}