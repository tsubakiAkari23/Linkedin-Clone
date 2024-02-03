import React from 'react';
import './App.css';
import Header from './Header';

function App() {
  return (
    <div className="app">
      <Header />

      {/* App body */}
      <div className="app-body">
        <Sidebar />
        {/* Feed */}
        {/* Widgets */}
      </div>
    </div>
  );
}

export default App;
