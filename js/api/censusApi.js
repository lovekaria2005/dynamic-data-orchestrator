import { BASE_URL, API_KEY, RAW_FETCH_LIMIT, SUBMIT_URL } from "../config.js";

export async function fetchStatePopulationData(desiredCount) {
  const url = `${BASE_URL}?api-key=${API_KEY}&format=json&limit=${RAW_FETCH_LIMIT}`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Server responded with status ${response.status}`);
  }

  const json = await response.json();
  const records = json.records || [];

  const states = records.filter(
    (r) => r.level === "STATE" && r.tru === "Total"
  );

  const cleaned = states
    .map((r) => ({
      name: r.name,
      value: Number(r.total_population_person),
    }))
    .filter((r) => !Number.isNaN(r.value));

  return cleaned.slice(0, desiredCount);
}

export async function submitResults(payload) {
  const response = await fetch(SUBMIT_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error(`Submission failed with status ${response.status}`);
  }

  return response.json();
}