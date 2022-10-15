import { swap } from '../utils';

export const heapSort = (arr) => {
    const animations = [];
    buildHeap(arr, animations);

    for (let i = arr.length - 1; i >= 1; i--) {
        animations.push({
            type: 'SWAP',
            indexes: [i, 0]
        });
        animations.push({
            type: 'COLOR',
            indexes: [i],
            color: '#138D75'
        });
        swap(arr, i, 0);
        heapifyDown(arr, 0, i, animations);
    }
    return animations;
}

const buildHeap = (arr, animations) => {
    for (let i = Math.floor(arr.length / 2 - 1); i >= 0; i--) {
        heapifyDown(arr, i, arr.length - 1, animations);
    }
}

const heapifyDown = (arr, idx, n, animations) => {
    while (idx * 2 + 1 < n) {
        let leftChildIdx = idx * 2 + 1;
        let rightChildIdx = idx * 2 + 2;
        let largerChildIdx = leftChildIdx;
        if (rightChildIdx < n && arr[rightChildIdx] > arr[largerChildIdx]) {
            largerChildIdx = rightChildIdx;
        }

        if (arr[idx] < arr[largerChildIdx]) {
            animations.push({
                type: 'SWAP',
                indexes: [idx, largerChildIdx]
            });
            swap(arr, idx, largerChildIdx);
            idx = largerChildIdx;
        } else {
            break;
        }
    }
}