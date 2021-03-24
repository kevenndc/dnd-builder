import React, { Component } from 'react';
import _uniqueId from 'lodash/uniqueId';
import TextBlock from './TextBlock';
import ModuleWrapper from './ModuleWrapper';

class TextBlockController extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: _uniqueId('dnd-'),
    }
  }

  render() {
    if (this.props.isBuilderMode) {
      return (
        <ModuleWrapper id={this.state.id}>
          <TextBlock  />
        </ModuleWrapper>
      )
    }
    else {
      return (
        <TextBlock />
      )
    }
    
  }
}

export default TextBlockController;