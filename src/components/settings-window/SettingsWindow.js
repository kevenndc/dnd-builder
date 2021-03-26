import React from 'react';
import SettingsTab from './SettingsTab';
import SettingsSection from './SettingsSection';

export default function SettingsWindow(props) {
  return (
    <div className="dnd__setting-panel">
      {Object.entries(props.tabs).map((tab, sections) => (
        <div className="dnd__setting-tab">
          <div className="dnd__setting-tab--name">
            <h2>{tab.name}</h2>
          </div>
          <div className="dnd__setting-tab--content">
            {Object.entries(sections).map(section, settings) => (
              <div className="dnd__section">
                <div className="dnd__section--name">
                  <h3>{section.name}</h3>
                </div>
                <div className="dnd__section--controls">
                  =
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}