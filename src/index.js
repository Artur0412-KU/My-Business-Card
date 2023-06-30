import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import Card from './Card';

function App() {
  return (
    <div>
      <Card />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
