

import './App.css';
import Dashboard from './component/Dashboard';
import {PostDetailProvider} from "./PostDetailContext";

function App() {

  return (
    <PostDetailProvider>
    <Dashboard />
  </PostDetailProvider>
  )
}

export default App
