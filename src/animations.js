import { bubbleSort } from "./algorithms/bubblesort";
import { heapSort } from "./algorithms/heapsort";
import { quickSort } from "./algorithms/quicksort";
import { selectionsort } from "./algorithms/selectionsort";

export const getAnimations = (algorithm, array) => {
    let animations;

    switch (algorithm) {
        case 'bubbleSort':
            animations = bubbleSort(array);
            break;
        case 'selectionSort':
            animations = selectionsort(array);
            break;
        case 'heapSort':
            animations = heapSort(array);
            break;
        case 'quickSort':
            animations = quickSort(array);
            break;
        default:
            break;
    }
    return animations;
}