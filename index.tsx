import * as React from 'react';
import { render } from 'react-dom';
import { RecursiveTree } from './RecursiveTree';
import './style.css';

function App() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <h1>Let's draw a tree!</h1>
      <p>
        <img
          style={{ height: 300 }}
          src="https://forum.drawbot.com/assets/uploads/files/1515499068331-tree.jpg"
        />
      </p>
      <RecursiveTree />
    </div>
  );
}

render(<App />, document.getElementById('root'));
