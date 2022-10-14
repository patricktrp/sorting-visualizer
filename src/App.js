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
  const [isAnimating, setIsAnimating] = useState(false);
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

    for (let i = 0; i < animations.length; i++) {
      const animation = animations[i];
      switch (animation.type) {
        case 'SWAP':
          setTimeout(() => {
            const [i, j] = animation.indexes;
            setNumbers((oldNums) => {
              const newNums = [...oldNums];
              let tmp = newNums[i];
              newNums[i] = newNums[j];
              newNums[j] = tmp;
              return newNums;
            });
          }, i * 50);
          break;
        default:
          break;
      }
    }

    setTimeout(() => {
      finalSortedAnimation();
    }, animations.length * 50);
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
