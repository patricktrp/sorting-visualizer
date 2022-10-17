
export const bubbleSort = (arr) => {
    const animations = [];
    let comparisons = 0;
    let swaps = 0;

    for (let i = 0; i < arr.length - 1; i++) {
        let isAlreadySorted = true;
        for (let j = 0; j < arr.length - i - 1; j++) {
            animations.push({
                type: 'COLOR',
                indexes: [j, j + 1],
                color: 'cyan'
            })
            comparisons++;
            if (arr[j] > arr[j + 1]) {
                swaps++;
                animations.push({
                    type: 'SWAP',
                    indexes: [j, j + 1]
                });
                let tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
                isAlreadySorted = false;
            }
            animations.push({
                type: 'COLOR_RESET_BY_INDEX',
                indexes: [j, j + 1]
            });
        }
        if (isAlreadySorted) break;
        animations.push({
            type: 'COLOR',
            indexes: [arr.length - i - 1],
            color: '#138D75'
        })
    }
    return [animations, comparisons, swaps];
}