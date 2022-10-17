import { Box } from '@chakra-ui/react';

const algorithmData = {
    'bubbleSort': {
        'name': 'Bubblesort',
        'wc_time_complexity': 'O(N^2)',
        'ac_time_complexity': 'O(N^2)',
        'bc_time_complexity': 'O(N)'
    },
    'insertionSort': {
        'name': 'Insertion Sort',
        'wc_time_complexity': 'O(N^2)',
        'ac_time_complexity': 'O(N^2)',
        'bc_time_complexity': 'O(N)'
    },
    'selectionSort': {
        'name': 'Selection Sort',
        'wc_time_complexity': 'O(N^2)',
        'ac_time_complexity': 'O(N^2)',
        'bc_time_complexity': 'O(N^2)'
    },
    'mergeSort': {
        'name': 'Mergesort',
        'wc_time_complexity': 'O(N * log N)',
        'ac_time_complexity': 'O(N * log N)',
        'bc_time_complexity': 'O(N * log N)'
    },
    'quickSort': {
        'name': 'Quicksort',
        'wc_time_complexity': 'O(N^2)',
        'ac_time_complexity': 'O(N * log N)',
        'bc_time_complexity': 'O(N * log N)'
    },
    'heapSort': {
        'name': 'Heapsort',
        'wc_time_complexity': 'O(N * log N)',
        'ac_time_complexity': 'O(N * log N)',
        'bc_time_complexity': 'O(N * log N)'
    },
}

const AlgorithmInfo = (props) => {
    return (
        <Box>
            <Box color={'white'} backgroundColor={'rgb(31,31,31)'} borderRadius={'15px'} margin={'15px'} padding={'15px'}>
                <p color='#ddd'>Time Complexity</p>
                <p>Best Case: O(N)</p>
                <p>Average Case: O(N<sup>2</sup>)</p>
                <p>Worst Case: O(N<sup>2</sup>)</p>
            </Box>
            <Box color={'white'} backgroundColor={'rgb(31,31,31)'} borderRadius={'15px'} margin={'15px'} padding={'15px'}>
                <p color='#ddd'>Space Complexity</p>
                <p>Best Case: O(N)</p>
                <p>Average Case: O(N<sup>2</sup>)</p>
                <p>Worst Case: O(N<sup>2</sup>)</p>
            </Box>

        </Box>
    )
}

export default AlgorithmInfo;