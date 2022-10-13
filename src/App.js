import './App.css';
import { createRandomArrayBySize } from './utils';
import { useState } from 'react';

const INITIAL_ARRAY_LENGTH = 40

const App = () => {
  const [numbers, setNumbers] = useState(createRandomArrayBySize(INITIAL_ARRAY_LENGTH));
  const length = numbers.length;

  return (
    <div className="App">
      {numbers.map(num => {
        return <p key={Math.random()}>{num}</p>
      })}
    </div>
  );
}

export default App;
