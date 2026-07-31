const apps = [
  { name: "YouTube Kids", description: "Videos made for kids", packageName: "com.google.android.apps.youtube.kids", icon: "▶", color: "#ef4444" },
  { name: "Duolingo", description: "Learn a new language", packageName: "com.duolingo", icon: "🦉", color: "#58cc02" },
  { name: "GeoGebra", description: "Math and science tools", packageName: "org.geogebra.android", icon: "∑", color: "#6750a4" },
  { name: "Kiwix PhET", description: "Offline science simulations", packageName: "org.kiwix.kiwixcustomphet", icon: "⚛", color: "#1b7f9e" },
  { name: "Star Walk 2", description: "Explore the night sky", packageName: "com.vitotechnology.StarWalk2Free", icon: "✦", color: "#263b86" },
  { name: "Khan Academy", description: "Free lessons and practice", packageName: "org.khanacademy.android", icon: "✚", color: "#14a37f" },
];

const appList = document.querySelector("#app-list");
const appCount = document.querySelector("#app-count");
appCount.textContent = `${apps.length} apps`;

function openApp(packageName) {
  const playStoreUrl = `https://play.google.com/store/apps/details?id=${packageName}`;
  const fallback = encodeURIComponent(playStoreUrl);
  window.location.href = `intent://#Intent;scheme=android-app;package=${packageName};S.browser_fallback_url=${fallback};end`;
}

apps.forEach((app) => {
  const button = document.createElement("button");
  button.className = "app-card";
  button.type = "button";
  button.setAttribute("aria-label", `Open ${app.name}`);
  button.innerHTML = `
    <span class="app-icon" style="background:${app.color}" aria-hidden="true">${app.icon}</span>
    <span class="app-info">
      <span class="app-name">${app.name}</span>
      <span class="app-description">${app.description}</span>
    </span>
    <span class="arrow" aria-hidden="true">›</span>`;
  button.addEventListener("click", () => openApp(app.packageName));
  appList.append(button);
});
