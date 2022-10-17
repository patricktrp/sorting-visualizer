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
        <div>
            <p>
                {algorithmData[props.selectedAlgorithm].name}
            </p>
            <p>
                WC: {algorithmData[props.selectedAlgorithm].wc_time_complexity}
            </p>
            <p>
                AC: {algorithmData[props.selectedAlgorithm].ac_time_complexity}
            </p>
            <p>
                BC: {algorithmData[props.selectedAlgorithm].bc_time_complexity}
            </p>
        </div>
    )
}

export default AlgorithmInfo;