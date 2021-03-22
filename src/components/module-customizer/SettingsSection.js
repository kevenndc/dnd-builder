import React, { Component } from 'react';

class SettingsSection extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="dnd__setting-section" id={this.props.id}>
        {this.props.children}
      </div>
    )
  }
}

export default SettingsSection;