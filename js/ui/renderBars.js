import { formatNumber } from "../utils/formatNumber.js";

function createBarElement(item, isActive, maxValue) {
  const bar = document.createElement("div");
  bar.className = isActive ? "bar bar-active" : "bar";
  bar.style.height = `${(item.value / maxValue) * 100}%`;

  const valueLabel = document.createElement("span");
  valueLabel.className = "bar-value";
  valueLabel.textContent = formatNumber(item.value);

  const nameLabel = document.createElement("span");
  nameLabel.className = "bar-name";
  nameLabel.textContent = item.name;

  bar.append(valueLabel, nameLabel);
  return bar;
}

export function renderBars(container, data, activeIndices = []) {
  container.innerHTML = "";
  const maxValue = Math.max(...data.map((d) => d.value), 1);

  data.forEach((item, index) => {
    const isActive = activeIndices.includes(index);
    container.appendChild(createBarElement(item, isActive, maxValue));
  });
}