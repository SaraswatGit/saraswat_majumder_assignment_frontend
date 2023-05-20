import './App.css';
import Header from "./Components/Header/Header";
import Editor from './Components/Editor/Editor';
import Toolbar from "./Components/Toolbar/Toolbar";
import AppsBar from './Components/Appsbar/AppsBar';
function App() {
  return (
    <div className="App">
  <Header></Header>
  <div className='body-container'>
  <div className='editor-toolbar-container'>
  <Toolbar></Toolbar>
  <Editor></Editor>
  </div>
  <div>
<AppsBar></AppsBar>
  </div>
  </div>
    </div>
  );
}

export default App;

