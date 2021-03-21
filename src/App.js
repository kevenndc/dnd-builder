import logo from './logo.svg';
import './App.css';
import Dropzone from './components/DropZone';
import Draggable from './components/Draggable';

function App() {
  return (
    <div className="App">
      <h1>Drag and drop</h1>
      <div className="drop-zones">
        <Dropzone>
          <Draggable id="item-1">
            <h3 contenteditable="true">Item 1</h3>
          </Draggable>
        </Dropzone>

        <Dropzone>
          <Draggable id="item-2">
            <h3 contenteditable="true">Item 3</h3>
          </Draggable>
        </Dropzone>
      </div>

    </div>
  );
}

export default App;
