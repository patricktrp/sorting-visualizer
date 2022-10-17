import { bubbleSort } from "./algorithms/bubblesort";
import { heapSort } from "./algorithms/heapsort";
import { insertionSort } from "./algorithms/insertionsort";
import { mergeSort } from "./algorithms/mergesort";
import { quickSort } from "./algorithms/quicksort";
import { selectionsort } from "./algorithms/selectionsort";
import { algorithms } from "./algorithms/constants";

export const getAnimations = (algorithm, array) => {
    let animations;

    switch (algorithm) {
        case algorithms.BUBBLE_SORT:
            animations = bubbleSort(array);
            break;
        case algorithms.SELECTION_SORT:
            animations = selectionsort(array);
            break;
        case algorithms.HEAP_SORT:
            animations = heapSort(array);
            break;
        case algorithms.QUICK_SORT:
            animations = quickSort(array);
            break;
        case algorithms.INSERTION_SORT:
            animations = insertionSort(array);
            break;
        case algorithms.MERGE_SORT:
            animations = mergeSort(array);
            break;
        default:
            break;
    }
    return animations;
}