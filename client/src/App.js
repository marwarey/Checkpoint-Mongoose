import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation';
import Home from './components/Home';
import List from './components/List';
import AddEdit from './components/AddEdit';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Routes>
        <Route path='/'  element={<Home></Home>}  />
        <Route path='/list'  element={<List></List>}  />
        <Route path='/form'  element={<AddEdit></AddEdit>}  />

      </Routes>
    
    </div>
  );
}

export default App;
