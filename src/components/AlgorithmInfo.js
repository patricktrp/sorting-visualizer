const algorithmData = {
    'bubbleSort': {
        'wc_time_complexity': 'O(N^2)',
        'ac_time_complexity': 'O(N^2)',
        'bc_time_complexity': 'O(N)'
    },
    'insertionSort': {
        'wc_time_complexity': 'O(N^2)',
        'ac_time_complexity': 'O(N^2)',
        'bc_time_complexity': 'O(N)'
    },
    'selectionSort': {
        'wc_time_complexity': 'O(N^2)',
        'ac_time_complexity': 'O(N^2)',
        'bc_time_complexity': 'O(N^2)'
    },
    'mergeSort': {
        'wc_time_complexity': 'O(N * log N)',
        'ac_time_complexity': 'O(N * log N)',
        'bc_time_complexity': 'O(N * log N)'
    },
    'quickSort': {
        'wc_time_complexity': 'O(N^2)',
        'ac_time_complexity': 'O(N * log N)',
        'bc_time_complexity': 'O(N * log N)'
    },
    'heapSort': {
        'wc_time_complexity': 'O(N * log N)',
        'ac_time_complexity': 'O(N * log N)',
        'bc_time_complexity': 'O(N * log N)'
    },
}

const AlgorithmInfo = (props) => {
    return (
        <div>
            <p>
                {props.selectedAlgorithm}
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