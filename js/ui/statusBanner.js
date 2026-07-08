const banner = document.getElementById("status-banner");

export function showLoading(message = "Fetching data...") {
  banner.className = "status-banner status-loading";
  banner.textContent = message;
  banner.classList.remove("hidden");
}

export function showError(message) {
  banner.className = "status-banner status-error";
  banner.textContent = message;
  banner.classList.remove("hidden");
}

export function showSuccess(message) {
  banner.className = "status-banner status-success";
  banner.textContent = message;
  banner.classList.remove("hidden");
}

export function hideBanner() {
  banner.classList.add("hidden");
}