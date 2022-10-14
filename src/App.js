import { useState } from 'react';
import { getAnimations } from './animations';
import './App.css';
import Navbar from './components/Navbar';
import Visualizer from './components/Visualizer';
import { createRandomArrayBySize } from './utils';

const INITIAL_ARRAY_LENGTH = 40

const App = () => {
  const [numbers, setNumbers] = useState(createRandomArrayBySize(INITIAL_ARRAY_LENGTH));
  const [colors, setColors] = useState({});
  const length = numbers.length;

  const shuffleArrayHandler = () => {
    setNumbers(createRandomArrayBySize(length));
  }

  const changeArraySizeHandler = (newSize) => {
    setNumbers(createRandomArrayBySize(newSize));
  }

  const sortArrayHandler = () => {
    setNumbers((oldNumbers) => {
      return [...oldNumbers].sort((a, b) => a - b);
    });
  }

  const getAnimationHandler = () => {
    const animations = getAnimations('bubbleSort', [...numbers]);


    finalSortedAnimation();
  }

  const finalSortedAnimation = () => {
    for (let i = 0; i < numbers.length; i++) {
      setTimeout(() => {
        setColors((oldColors) => {
          const newColors = { ...oldColors };
          newColors[i] = 'lightgreen';
          return newColors;
        });
      }, 30 * i);
    }
    setTimeout(() => {
      setColors({});
    }, (40 * numbers.length));

  }

  return (
    <div className="App">
      <Navbar onShuffleArray={shuffleArrayHandler}
        onSortArray={sortArrayHandler}
        onChangeArraySize={changeArraySizeHandler}
        currentSize={length}
        onAnimate={getAnimationHandler}
      />
      <Visualizer numbers={numbers} colors={colors} />
    </div>
  );
}

export default App;
