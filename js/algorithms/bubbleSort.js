import { delay } from "../utils/delay.js";

export async function bubbleSort(array, onStep, speed = 150) {
  const arr = [...array];
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      onStep(arr, [j, j + 1]);
      await delay(speed);

      if (arr[j].value > arr[j + 1].value) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        onStep(arr, [j, j + 1]);
        await delay(speed);
      }
    }
  }

  onStep(arr, []);
  return arr;
}