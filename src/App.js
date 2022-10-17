import { useState } from 'react';
import { getAnimations } from './animations';
import './App.css';
import Navbar from './components/Navbar';
import Visualizer from './components/Visualizer';
import { createRandomArrayBySize } from './utils';

const INITIAL_ARRAY_LENGTH = 40;
const ANIMATION_SPEED = 25;

const App = () => {
  const [numbers, setNumbers] = useState(createRandomArrayBySize(INITIAL_ARRAY_LENGTH));
  const [colors, setColors] = useState({});
  const [isAnimating, setIsAnimating] = useState(false);
  const [algorithm, setAlgorithm] = useState("bubbleSort");
  const length = numbers.length;

  const changeAlgorithmHandler = (newAlgorithm) => {
    setAlgorithm(newAlgorithm);
  }

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
    setIsAnimating(true);
    const animations = getAnimations(algorithm, [...numbers]);

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
          }, i * ANIMATION_SPEED);
          break;
        case 'COLOR':
          setTimeout(() => {
            const [i, j] = animation.indexes;
            const color = animation.color;
            setColors((oldColors) => {
              const newColors = { ...oldColors };
              newColors[i] = color;
              newColors[j] = color;
              return newColors;
            });
          }, i * ANIMATION_SPEED);
          break;
        case 'COLOR_RESET':
          setTimeout(() => {
            setColors({});
          }, i * ANIMATION_SPEED);
          break;
        case 'COLOR_RESET_BY_INDEX':
          const indexes = animation.indexes;
          setTimeout(() => {
            setColors((oldColors) => {
              const newColors = { ...oldColors };
              for (const index of indexes) {
                delete newColors[index];
              }
              return newColors;
            });
          }, i * ANIMATION_SPEED);
          break;
        case 'SET_VALUE':
          setTimeout(() => {
            setNumbers(oldNumbers => {
              const newNums = [...oldNumbers];
              newNums[animation.index] = animation.newValue;
              return newNums
            });
          }, i * ANIMATION_SPEED);
          break;
        default:
          break;
      }
    }

    setTimeout(() => {
      finalSortedAnimation();
    }, animations.length * ANIMATION_SPEED);
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
      setIsAnimating(false);
    }, (45 * numbers.length));
  }

  return (
    <div className="App">
      <Navbar onShuffleArray={shuffleArrayHandler}
        isAnimating={isAnimating}
        onSortArray={sortArrayHandler}
        onChangeArraySize={changeArraySizeHandler}
        currentSize={length}
        onAnimate={getAnimationHandler}
        algorithm={algorithm}
        onChangeAlgorithm={changeAlgorithmHandler}
      />
      <div style={{ display: 'flex' }}>
        <div style={{ width: '13vw' }}> </div>
        <div style={{ width: '74vw', border: '1px solid grey', textAlign: 'center', paddingLeft: '2px', paddingRight: '2px' }}>
          <Visualizer numbers={numbers} colors={colors} />
        </div>
        <div style={{ width: '13vw' }}> </div>
      </div>
    </div>
  );
}

export default App;
