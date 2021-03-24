import './App.css';
import Dropzone from './components/DropZone';
import Draggable from './components/Draggable';

import TextBlockController from './components/modules/TextBlockController';

function App() {
  return (
    <div className="App">
      <TextBlockController
        isBuilderMode={true} 
      />
    </div>
  );
}

export default App;
