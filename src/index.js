import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

function SayHello() {
  let item = "React"
  return (
    <div><h1>Hello {item}</h1></div>
  )
}

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

ReactDOM.render(<SayHello />, document.getElementById('root'));
registerServiceWorker();
