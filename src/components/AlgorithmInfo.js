import { Box, Stat, StatLabel, StatNumber } from '@chakra-ui/react';
import { Slider, SliderTrack, SliderFilledTrack, SliderThumb } from '@chakra-ui/react';

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
            <Box color={'white'} backgroundColor={'rgb(31,31,31)'} borderRadius={'15px'} margin={'0 15px 15px 15px'} padding={'15px'}>
                <Stat>
                    <StatLabel>Time Complexity</StatLabel>
                    <StatNumber>Best Case: O(N)</StatNumber>
                    <StatNumber>Average Case: O(N<sup>2</sup>)</StatNumber>
                    <StatNumber>Worst Case: O(N<sup>2</sup>)</StatNumber>
                </Stat>
            </Box>
            <Box color={'white'} backgroundColor={'rgb(31,31,31)'} borderRadius={'15px'} margin={'0 15px 15px 15px'} padding={'15px'}>
                Array Size
                <Slider value={props.currentSize} onChange={props.onChangeArraySize} min={10} max={300}>
                    <SliderTrack>
                        <SliderFilledTrack backgroundColor={'rgb(187,134,252)'} />
                    </SliderTrack>
                    <SliderThumb />
                </Slider>
            </Box>
            <Box color={'white'} backgroundColor={'rgb(31,31,31)'} borderRadius={'15px'} margin={'0 15px 15px 15px'} padding={'15px'}>
                Sorting Speed
                <Slider value={props.animationSpeed} onChange={props.onChangeAnimationSpeed} min={10} max={100}>
                    <SliderTrack>
                        <SliderFilledTrack backgroundColor={'rgb(187,134,252)'} />
                    </SliderTrack>
                    <SliderThumb />
                </Slider>
            </Box>
        </Box >
    )
}

export default AlgorithmInfo;