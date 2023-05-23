import './App.css';
import Topbar from "./components/topbar/Topbar"
import Home from "./components/home/Home"
import Todolist from './components/todolist/Todolist';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  return (
    <>
      <Topbar />
      <Todolist/>
    </>
  );
}

export default App;
