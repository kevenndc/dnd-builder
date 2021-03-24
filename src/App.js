import './App.css';
import Dropzone from './components/modules/builder-components/DropZone';
import Draggable from './components/Draggable';

import TextBlockController from './components/modules/text-block/TextBlockController';
import SectionController from './components/modules/section/SectionController';

function App() {
  return (
    <div className="App">
      <TextBlockController
        isBuilderMode={true} 
      />
      <SectionController isBuilderMode={true} />
      <SectionController isBuilderMode={true} />
    </div>
  );
}

export default App;
