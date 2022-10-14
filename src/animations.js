import { bubbleSort } from "./algorithms/bubblesort";

export const getAnimations = (algorithm, array) => {
    let animations;

    switch(algorithm) {
        case 'bubbleSort':
            animations = bubbleSort(array);
            break;
        default:
            break;
        }
    return animations;
}