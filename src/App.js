import './App.css';
import Topbar from "./components/topbar/Topbar"
import Home from "./components/home/Home"
import Todolist from './components/todolist/Todolist';


function App() {
  return (
    <>
      <Topbar />
      <Todolist/>
    </>
  );
}

export default App;
