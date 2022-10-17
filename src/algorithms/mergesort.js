export const mergeSort = (arr) => {
    const animations = [];
    mergeSortEntryPoint(arr, animations);
    return [animations, 0, 0];
}

const mergeSortEntryPoint = (arr, animations) => {
    if (arr.length <= 1) {
        return arr;
    }
    const auxiliaryArray = [...arr];
    mergeSortHelper(arr, 0, arr.length - 1, auxiliaryArray, animations);
}

const mergeSortHelper = (mainArr, startIdx, endIdx, auxiliaryArray, animations) => {
    if (startIdx === endIdx) return;

    let middleIdx = Math.floor((startIdx + endIdx) / 2);
    mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArr, animations);
    mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArr, animations);
    doMerge(mainArr, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
}

const doMerge = (mainArr, startIdx, middleIdx, endIdx, auxiliaryArray, animations) => {
    let k = startIdx;
    let i = startIdx;
    let j = middleIdx + 1;

    while (i <= middleIdx && j <= endIdx) {
        if (auxiliaryArray[i] <= auxiliaryArray[j]) {
            animations.push({
                type: 'SET_VALUE',
                index: k,
                newValue: auxiliaryArray[i]
            });
            mainArr[k] = auxiliaryArray[i];
            i++;
        } else {
            animations.push({
                type: 'SET_VALUE',
                index: k,
                newValue: auxiliaryArray[j]
            });
            mainArr[k] = auxiliaryArray[j];
            j++
        }
        k++;
    }

    while (i <= middleIdx) {
        animations.push({
            type: 'SET_VALUE',
            index: k,
            newValue: auxiliaryArray[i]
        });
        mainArr[k] = auxiliaryArray[i];
        i++;
        k++;
    }

    while (j <= endIdx) {
        animations.push({
            type: 'SET_VALUE',
            index: k,
            newValue: auxiliaryArray[j]
        });
        mainArr[k] = auxiliaryArray[j];
        j++;
        k++;
    }
}