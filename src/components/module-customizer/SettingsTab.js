import React, { Component } from 'react';

class SettingsTab extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="dnd__setting-tab" id={this.props.id}>
        {this.props.children}
      </div>
    )
  }
}

export default SettingsTab;