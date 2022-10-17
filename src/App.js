import { useState } from 'react';
import { getAnimations } from './animations';
import './App.css';
import Navbar from './components/Navbar';
import Visualizer from './components/Visualizer';
import { createRandomArrayBySize } from './utils';
import { Flex, Box } from '@chakra-ui/react';
import AlgorithmInfo from './components/AlgorithmInfo';
import RuntimeInfo from './components/RuntimeInfo';

const INITIAL_ARRAY_LENGTH = 40;
const ANIMATION_SPEED = 25;

const App = () => {
  const [numbers, setNumbers] = useState(createRandomArrayBySize(INITIAL_ARRAY_LENGTH));
  const [colors, setColors] = useState({});
  const [isAnimating, setIsAnimating] = useState(false);
  const [algorithm, setAlgorithm] = useState("bubbleSort");
  const length = numbers.length;
  const [comparisons, setComparisons] = useState(0);
  const [animationDuration, setAnimationDuration] = useState(0);
  const [swaps, setSwaps] = useState(0);
  const [animationSpeed, setAnimationSpeed] = useState(ANIMATION_SPEED)


  const changeAlgorithmHandler = (newAlgorithm) => {
    setAlgorithm(newAlgorithm);
  }

  const shuffleArrayHandler = () => {
    setNumbers(createRandomArrayBySize(length));
    setComparisons(0);
    setSwaps(0);
    setAnimationDuration(0);
  }

  const changeArraySizeHandler = (newSize) => {
    setNumbers(createRandomArrayBySize(newSize));
    setComparisons(0);
    setSwaps(0);
    setAnimationDuration(0);
  }

  const changeAnimationSpeedHandler = (newSpeed) => {
    setAnimationSpeed(newSpeed);
  }

  const sortArrayHandler = () => {
    setNumbers((oldNumbers) => {
      return [...oldNumbers].sort((a, b) => a - b);
    });
  }

  const getAnimationHandler = () => {
    setIsAnimating(true);
    const [animations, comps, swapis] = getAnimations(algorithm, [...numbers]);
    setComparisons(comps);
    setSwaps(swapis);
    setAnimationDuration((animations.length - 1) * animationSpeed);

    for (let i = 0; i < animations.length; i++) {
      if (i === animations.length - 1) console.log(i * animationSpeed);
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
          }, i * animationSpeed);
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
          }, i * animationSpeed);
          break;
        case 'COLOR_RESET':
          setTimeout(() => {
            setColors({});
          }, i * animationSpeed);
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
          }, i * animationSpeed);
          break;
        case 'SET_VALUE':
          setTimeout(() => {
            setNumbers(oldNumbers => {
              const newNums = [...oldNumbers];
              newNums[animation.index] = animation.newValue;
              return newNums
            });
          }, i * animationSpeed);
          break;
        default:
          break;
      }
    }

    setTimeout(() => {
      finalSortedAnimation();
    }, animations.length * animationSpeed);
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
        animationSpeed={animationSpeed}
        onChangeAnimationSpeed={changeAnimationSpeedHandler}
      />
      <Flex>
        <Box style={{ width: '13vw' }}>
          <AlgorithmInfo selectedAlgorithm={algorithm} />
        </Box>
        <Box style={{ width: '74vw', border: '1px solid grey', borderTop: '0px', textAlign: 'center', paddingLeft: '2px', paddingRight: '2px' }}>
          <Visualizer numbers={numbers} colors={colors} />
        </Box>
        <Box style={{ width: '13vw' }}>
          <RuntimeInfo comparisons={comparisons} duration={animationDuration} swaps={swaps} />
        </Box>
      </Flex>
    </div>
  );
}

export default App;
