# Bharat Population Visualizer 

A live sorting visualizer that fetches real population data of Indian states
(Census 2011) from a government API and sorts it in front of you using bubble sort,
selection sort or quick sort — you can pick which one.

Made with plain HTML, CSS and JavaScript. No React or any framework.

## Live link
[paste your deployed link here]

## What this project does

This was a college assignment. The requirement was to build a sorting visualizer
that gets data from a real API (not hardcoded), sort it with animation, and send
the result to a server after sorting is done.

Instead of using random numbers, I used real data from data.gov.in (India's
official open data website) — specifically the Census 2011 dataset, which has
population numbers for every state. So basically the project sorts Indian states
by population, live.

## How it works

- On page load, it fetches state-wise population data from the API
- Each state becomes a bar, height = population, and the number is shown on the bar
- You choose an algorithm (bubble/selection/quick) and click "Start Sorting"
- The bars animate step by step as the algorithm runs
- Once sorting finishes, it sends the sorted result to a mock API using POST
  (used jsonplaceholder.typicode.com for this since we didn't need a real backend)
- If the API call fails for any reason, it shows an error message instead of
  breaking the page

## Why I picked these algorithms

I added all three (bubble, selection, quick) so I could compare them:

- Bubble sort — keeps comparing two neighboring bars and swaps them if wrong order.
  Simple but slow for big data.
- Selection sort — finds the smallest value in the remaining part and puts it in
  place. Also slow but fewer swaps than bubble sort.
- Quick sort — splits the array around a pivot value and sorts each part
  separately. Faster than the other two for larger arrays.

## How I handled async stuff

Used async/await everywhere instead of .then() chains, and wrapped API calls in
try/catch so errors don't crash the app. The sorting functions are also async —
they wait a bit (using a delay function) after every comparison so you can
actually see the bars move instead of it happening instantly.

## Folder structure

census-sort-visualizer/
├── index.html
├── css/
│   └── style.css
├── js/
│   ├── config.js 
│   ├── config.example.js 
│   ├── api/
│   │   └── censusApi.js
│   ├── algorithms/
│   │   ├── bubbleSort.js
│   │   ├── selectionSort.js
│   │   └── quickSort.js
│   ├── ui/
│   │   ├── renderBars.js
│   │   └── statusBanner.js
│   ├── utils/
│   │   ├── delay.js
│   │   └── formatNumber.js
│   └── main.js
├── .gitignore
└── README.md

## How to run this on your own machine

1. Clone this repo
   git clone https://github.com/YOUR_USERNAME/census-sort-visualizer.git
2. Copy js/config.example.js and rename the copy to js/config.js
3. Go to data.gov.in, make a free account, and get your own API key
4. Paste your key inside js/config.js
5. Open index.html in browser, or use Live Server in VS Code (needed because
   ES6 modules don't work properly if you just double-click the html file)



Made by Love karia