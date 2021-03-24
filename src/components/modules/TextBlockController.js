import React from 'react';
import _uniqueId from 'lodash/uniqueId';
import TextBlock from './TextBlock';
import ModuleWrapper from './ModuleWrapper';

export default function TextBlockController(props) {
  const id = _uniqueId('dnd-');

  if (props.isBuilderMode) {
    return (
      <ModuleWrapper id={id}>
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