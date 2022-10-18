import { useState } from 'react';
import { getAnimations } from './animations';
import { createRandomArrayBySize } from './utils';
import { algorithms } from './algorithms/constants';
import { Flex, Box } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import Visualizer from './components/Visualizer';
import AlgorithmInfo from './components/AlgorithmInfo';
import RuntimeInfo from './components/RuntimeInfo';
import { types } from './animations';
import colorConstants from './colors';

const INITIAL_ARRAY_LENGTH = 145;
const INITIAL_ANIMATION_SPEED = 100;

const App = () => {
  const [numbers, setNumbers] = useState(createRandomArrayBySize(INITIAL_ARRAY_LENGTH));
  const [colors, setColors] = useState({});
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationSpeed, setAnimationSpeed] = useState(INITIAL_ANIMATION_SPEED);
  const [algorithm, setAlgorithm] = useState(algorithms.BUBBLE_SORT);
  const [comparisons, setComparisons] = useState(0);
  const [animationDuration, setAnimationDuration] = useState(0);
  const [swaps, setSwaps] = useState(0);

  const length = numbers.length;
  const modifiedAnimationSpeed = 210 - animationSpeed;

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

  const getAnimationHandler = () => {
    setIsAnimating(true);
    const [animations, comps, swapis] = getAnimations(algorithm, [...numbers]);
    setComparisons(comps);
    setSwaps(swapis);
    setAnimationDuration((animations.length - 1) * modifiedAnimationSpeed);

    for (let i = 0; i < animations.length; i++) {
      const animation = animations[i];
      switch (animation.type) {
        case types.SWAP:
          setTimeout(() => {
            const [i, j] = animation.indexes;
            setNumbers((oldNums) => {
              const newNums = [...oldNums];
              let tmp = newNums[i];
              newNums[i] = newNums[j];
              newNums[j] = tmp;
              return newNums;
            });
          }, i * modifiedAnimationSpeed);
          break;
        case types.COLOR:
          setTimeout(() => {
            const [i, j] = animation.indexes;
            const color = animation.color;
            setColors((oldColors) => {
              const newColors = { ...oldColors };
              newColors[i] = color;
              newColors[j] = color;
              return newColors;
            });
          }, i * modifiedAnimationSpeed);
          break;
        case types.COLOR_RESET:
          setTimeout(() => {
            setColors({});
          }, i * modifiedAnimationSpeed);
          break;
        case types.COLOR_RESET_BY_INDEX:
          const indexes = animation.indexes;
          setTimeout(() => {
            setColors((oldColors) => {
              const newColors = { ...oldColors };
              for (const index of indexes) {
                delete newColors[index];
              }
              return newColors;
            });
          }, i * modifiedAnimationSpeed);
          break;
        case types.SET_VALUE:
          setTimeout(() => {
            setNumbers(oldNumbers => {
              const newNums = [...oldNumbers];
              newNums[animation.index] = animation.newValue;
              return newNums
            });
          }, i * modifiedAnimationSpeed);
          break;
        default:
          break;
      }
    }
    setTimeout(() => {
      setColors((oldColors) => {
        const newColors = { ...oldColors };
        for (let i = 0; i < length; i++) {
          newColors[i] = 'rgb(3,218,198)'
        }
        return newColors;
      });
    }, (animations.length * modifiedAnimationSpeed) + 250);

    setTimeout(() => {
      setColors({});
      setIsAnimating(false);
    }, (animations.length * modifiedAnimationSpeed) + 2250);
  }

  // const finalSortedAnimation = () => {
  //   for (let i = 0; i < numbers.length; i++) {
  //     setTimeout(() => {
  //       setColors((oldColors) => {
  //         const newColors = { ...oldColors };
  //         newColors[i] = 'rgb(3,218,198)';
  //         return newColors;
  //       });
  //     }, 30 * i);
  //   }
  //   setTimeout(() => {
  //     setColors({});
  //     setIsAnimating(false);
  //   }, (45 * numbers.length));
  // }

  return (
    <Box backgroundColor={colorConstants.primaryBackground} height={'100vh'}>
      <Navbar onShuffleArray={shuffleArrayHandler}
        isAnimating={isAnimating}
        onChangeArraySize={changeArraySizeHandler}
        currentSize={length}
        onAnimate={getAnimationHandler}
        algorithm={algorithm}
        onChangeAlgorithm={changeAlgorithmHandler}
        animationSpeed={animationSpeed}
        onChangeAnimationSpeed={changeAnimationSpeedHandler}
      />
      <Flex height={'80vh'}>
        <Box width={'13vw'}>
          <AlgorithmInfo
            isAnimating={isAnimating}
            selectedAlgorithm={algorithm}
            currentSize={length}
            onChangeArraySize={changeArraySizeHandler}
            animationSpeed={animationSpeed}
            onChangeAnimationSpeed={changeAnimationSpeedHandler} />
        </Box>
        <Box width={'74vw'} textAlign={'center'} paddingLeft={'2px'} paddingRight={'2px'}>
          <Visualizer numbers={numbers} colors={colors} />
        </Box>
        <Box width={'13vw'}>
          <RuntimeInfo comparisons={comparisons} duration={animationDuration} swaps={swaps} />
        </Box>
      </Flex>
      <Box height={'12vh'} padding={'5vh'} textAlign={'center'} color={'#ddd'} fontSize={'small'}>
        <hr style={{ margin: 'auto', maxWidth: '40vw', color: '#ddd' }} />
        <p>&copy; Patrick Treppmann</p>
      </Box>
    </Box>
  );
}

export default App;
