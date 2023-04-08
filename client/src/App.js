import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Home } from './components/Home';
import SearchBar from './components/SearchBar/SearchBar';

function App() {
  const [inputText, setInputText] = useState("");

  let inputHandler = (e) => {
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  
  return (
    <Router>
      <div className="App">
      <SearchBar inputHandler={inputHandler} />
        <Routes>
          <Route exact path='/' element={<Home inputText={inputText} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
