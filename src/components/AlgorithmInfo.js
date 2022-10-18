import { Box, Stat, StatLabel, StatNumber } from '@chakra-ui/react';
import { Slider, SliderTrack, SliderFilledTrack, SliderThumb } from '@chakra-ui/react';
import Card from './UI/Card';
import colors from '../colors';

// const algorithmData = {
//     'bubbleSort': {
//         'name': 'Bubblesort',
//         'wc_time_complexity': 'O(N^2)',
//         'ac_time_complexity': 'O(N^2)',
//         'bc_time_complexity': 'O(N)'
//     },
//     'insertionSort': {
//         'name': 'Insertion Sort',
//         'wc_time_complexity': 'O(N^2)',
//         'ac_time_complexity': 'O(N^2)',
//         'bc_time_complexity': 'O(N)'
//     },
//     'selectionSort': {
//         'name': 'Selection Sort',
//         'wc_time_complexity': 'O(N^2)',
//         'ac_time_complexity': 'O(N^2)',
//         'bc_time_complexity': 'O(N^2)'
//     },
//     'mergeSort': {
//         'name': 'Mergesort',
//         'wc_time_complexity': 'O(N * log N)',
//         'ac_time_complexity': 'O(N * log N)',
//         'bc_time_complexity': 'O(N * log N)'
//     },
//     'quickSort': {
//         'name': 'Quicksort',
//         'wc_time_complexity': 'O(N^2)',
//         'ac_time_complexity': 'O(N * log N)',
//         'bc_time_complexity': 'O(N * log N)'
//     },
//     'heapSort': {
//         'name': 'Heapsort',
//         'wc_time_complexity': 'O(N * log N)',
//         'ac_time_complexity': 'O(N * log N)',
//         'bc_time_complexity': 'O(N * log N)'
//     },
// }

const AlgorithmInfo = (props) => {
    return (
        <Box>
            <Card>
                <Stat>
                    <StatLabel>Time Complexity</StatLabel>
                    <StatNumber>Best Case: O(N)</StatNumber>
                    <StatNumber>Average Case: O(N<sup>2</sup>)</StatNumber>
                    <StatNumber>Worst Case: O(N<sup>2</sup>)</StatNumber>
                </Stat>
            </Card>
            <Card>
                Array Size
                <Slider value={props.currentSize} onChange={props.onChangeArraySize} min={10} max={300} disabled={props.isAnimating}>
                    <SliderTrack>
                        <SliderFilledTrack backgroundColor={colors.primaryColor} />
                    </SliderTrack>
                    <SliderThumb />
                </Slider>
            </Card>
            <Card>
                Sorting Speed
                <Slider value={props.animationSpeed} onChange={props.onChangeAnimationSpeed} min={10} max={200} disabled={props.isAnimating}>
                    <SliderTrack>
                        <SliderFilledTrack backgroundColor={colors.primaryColor} />
                    </SliderTrack>
                    <SliderThumb />
                </Slider>
            </Card>
        </Box >
    )
}

export default AlgorithmInfo;