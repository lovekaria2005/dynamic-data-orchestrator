# Bharat Population Visualizer

A live sorting visualizer that fetches real population data of Indian states
from the Census 2011 dataset and sorts it using Bubble Sort, Selection Sort,
or Quick Sort.

Made with plain HTML, CSS, and JavaScript. No React or framework required.

## Links

- Live project: https://dynamic-data-orchestrator.vercel.app
- GitHub repo: https://github.com/lovekaria2005/dynamic-data-orchestrator

## What This Project Does

This project fetches real population data from data.gov.in and visualizes the
data as bars. Each bar represents an Indian state, and the bar height is based
on population.

You can choose a sorting algorithm and watch the bars sort step by step.

## Features

- Fetches live state-wise population data from an API
- Visualizes population data as animated bars
- Supports Bubble Sort, Selection Sort, and Quick Sort
- Lets users control the sorting speed
- Submits the sorted result to a mock API after sorting
- Shows loading, success, and error messages

## How It Works

1. The app fetches Census 2011 population data from data.gov.in.
2. It filters the records to keep state-level population data.
3. The data is rendered as bars in the browser.
4. The selected sorting algorithm sorts the bars with animation.
5. After sorting, the result is submitted to a mock API.

## Folder Structure

```text
dynamic-data-orchestrator/
|-- index.html
|-- css/
|   |-- style.css
|-- js/
|   |-- config.js
|   |-- api/
|   |   |-- censusApi.js
|   |-- algorithms/
|   |   |-- bubbleSort.js
|   |   |-- selectionSort.js
|   |   |-- quickSort.js
|   |-- ui/
|   |   |-- renderBars.js
|   |   |-- statusBanner.js
|   |-- utils/
|   |   |-- delay.js
|   |   |-- formatNumber.js
|   |-- main.js
|-- .gitignore
|-- README.md
```

## How To Run Locally

1. Clone the repository:

```bash
git clone https://github.com/lovekaria2005/dynamic-data-orchestrator.git
```

2. Open the project folder:

```bash
cd dynamic-data-orchestrator
```

3. Open `index.html` with Live Server in VS Code.

## Deployment

This project is deployed on Vercel:

```text
https://dynamic-data-orchestrator.vercel.app
```

Whenever new changes are pushed to the `main` branch on GitHub, Vercel
automatically redeploys the live site.

## Made By

Love Karia
