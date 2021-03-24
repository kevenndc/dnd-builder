import React, { Component } from 'react';

class TextBlock extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
    <div className="dnd__module" id={this.props.id}>
      <p>This is an example text</p>
    </div>
    )
  }
}

export default TextBlock;