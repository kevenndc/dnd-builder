import React from 'react';
import _uniqueId from 'lodash/uniqueId';
import Section from './Section';
import ModuleWrapper from '../builder-components/ModuleWrapper';
import DropZone from '../builder-components/DropZone'

export default function SectionController(props) {
  const id = _uniqueId('dnd-');

  if (props.isBuilderMode) {
    return (
      <ModuleWrapper id={id}>
        <DropZone>
          <Section  />
        </DropZone>
      </ModuleWrapper>
    )
  }
  else {
    return (
      <Section />
    )
  }
}