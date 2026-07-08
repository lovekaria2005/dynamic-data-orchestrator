import { fetchStatePopulationData, submitResults } from "./api/censusApi.js";
import { bubbleSort } from "./algorithms/bubbleSort.js";
import { selectionSort } from "./algorithms/selectionSort.js";
import { quickSort } from "./algorithms/quickSort.js";
import { renderBars } from "./ui/renderBars.js";
import {
  showLoading,
  showError,
  showSuccess,
  hideBanner,
} from "./ui/statusBanner.js";

const barsContainer = document.getElementById("bars-container");
const fetchButton = document.getElementById("fetch-btn");
const sortButton = document.getElementById("sort-btn");
const algorithmSelect = document.getElementById("algorithm-select");
const limitInput = document.getElementById("limit-input");
const speedInput = document.getElementById("speed-input");

const algorithms = {
  bubble: bubbleSort,
  selection: selectionSort,
  quick: quickSort,
};

let currentData = [];

async function loadData() {
  const limit = Number(limitInput.value) || 40;
  fetchButton.disabled = true;
  sortButton.disabled = true;
  showLoading("Fetching live state population data...");

  try {
    currentData = await fetchStatePopulationData(limit);

    if (currentData.length === 0) {
      throw new Error("No valid records returned from the API.");
    }

    renderBars(barsContainer, currentData);
    showSuccess(`Loaded ${currentData.length} states successfully.`);
  } catch (error) {
    showError(`Could not load data: ${error.message}`);
    currentData = [];
  } finally {
    fetchButton.disabled = false;
    sortButton.disabled = false;
  }
}

async function runSort() {
  if (currentData.length === 0) {
    showError("Please fetch data before sorting.");
    return;
  }

  fetchButton.disabled = true;
  sortButton.disabled = true;
  hideBanner();

  const speed = Number(speedInput.value) || 150;
  const onStep = (arr, activeIndices) =>
    renderBars(barsContainer, arr, activeIndices);

  try {
    const algorithm = algorithmSelect.value;
    const sortFunction = algorithms[algorithm];
    const sorted = await sortFunction(currentData, onStep, speed);

    currentData = sorted;
    showSuccess("Sorting complete. Submitting results...");

    await submitResults({
      algorithm,
      sortedArray: sorted.map((s) => s.value),
      totalStates: sorted.length,
      status: "success",
      timestamp: new Date().toISOString(),
    });

    showSuccess("Results submitted successfully.");
  } catch (error) {
    showError(`Something went wrong: ${error.message}`);
  } finally {
    fetchButton.disabled = false;
    sortButton.disabled = false;
  }
}

fetchButton.addEventListener("click", loadData);
sortButton.addEventListener("click", runSort);
window.addEventListener("DOMContentLoaded", loadData);