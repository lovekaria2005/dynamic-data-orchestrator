import { delay } from "../utils/delay.js";

export async function selectionSort(array, onStep, speed = 150) {
  const arr = [...array];
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;

    for (let j = i + 1; j < n; j++) {
      onStep(arr, [minIndex, j]);
      await delay(speed);

      if (arr[j].value < arr[minIndex].value) {
        minIndex = j;
      }
    }

    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
      onStep(arr, [i, minIndex]);
      await delay(speed);
    }
  }

  onStep(arr, []);
  return arr;
}