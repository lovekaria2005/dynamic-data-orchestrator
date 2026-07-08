import { delay } from "../utils/delay.js";

async function partition(arr, low, high, onStep, speed) {
  const pivot = arr[high].value;
  let i = low - 1;

  for (let j = low; j < high; j++) {
    onStep(arr, [j, high]);
    await delay(speed);

    if (arr[j].value < pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
      onStep(arr, [i, j]);
      await delay(speed);
    }
  }

  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
  onStep(arr, [i + 1, high]);
  await delay(speed);

  return i + 1;
}

async function quickSortHelper(arr, low, high, onStep, speed) {
  if (low < high) {
    const pivotIndex = await partition(arr, low, high, onStep, speed);
    await quickSortHelper(arr, low, pivotIndex - 1, onStep, speed);
    await quickSortHelper(arr, pivotIndex + 1, high, onStep, speed);
  }
}

export async function quickSort(array, onStep, speed = 150) {
  const arr = [...array];
  await quickSortHelper(arr, 0, arr.length - 1, onStep, speed);
  onStep(arr, []);
  return arr;
}