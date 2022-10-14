import { useState } from 'react';
import { getAnimations } from './animations';
import './App.css';
import Navbar from './components/Navbar';
import Visualizer from './components/Visualizer';
import { createRandomArrayBySize } from './utils';

const INITIAL_ARRAY_LENGTH = 40

const App = () => {
  const [numbers, setNumbers] = useState(createRandomArrayBySize(INITIAL_ARRAY_LENGTH));
  const length = numbers.length;

  const shuffleArrayHandler = () => {
    setNumbers(createRandomArrayBySize(length));
  }

  const changeArraySizeHandler = (newSize) => {
    setNumbers(createRandomArrayBySize(newSize));
  }

  const sortArrayHandler = () => {
    setNumbers((oldNumbers) => {
      return [...oldNumbers].sort((a,b) => a-b);
    });
  }

  const getAnimationHandler = () => {
    const animations = getAnimations('bubbleSort', [...numbers]);

    // THIS WONT WORK
    for (let animation of animations) {
      // setTimeout(() => {
      //   setNumbers(animation);
      // }, 1500);
    }
  }

  return (
    <div className="App">
      <Navbar onShuffleArray={shuffleArrayHandler} 
              onSortArray={sortArrayHandler} 
              onChangeArraySize={changeArraySizeHandler} 
              currentSize={length}
              onAnimate={getAnimationHandler}
              />
      <Visualizer numbers={numbers}/>
    </div>
  );
}

export default App;
