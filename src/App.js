import React from 'react';
import './App.css';
import PasswordField from './components/PasswordField';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h1>Insert Password!</h1>
          <PasswordField />
        </div>
      </header>
    </div>
  );
}

export default App;
