import React, {useState, setState, useEffect, useRef} from 'react';
import './App.css';
import TestAPI from './testAPI'



export default function App() {

  return (
    <>
    <div className="App">
      <header className="App-header">
          <TestAPI />
      </header>
    </div>
    </>
  );
}
