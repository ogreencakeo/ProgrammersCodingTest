function solution(numbers, direction) {
    const len = numbers.length;

    const rotateArray = (arr, dir) => {
        if (dir === 'left') {
            const rotated = arr.slice(1).concat(arr.slice(0, 1));
            return rotated;
        } else if (dir === 'right') {
            const rotated = arr.slice(len - 1).concat(arr.slice(0, len - 1));
            return rotated;
        }
    };

    return rotateArray(numbers, direction);
}