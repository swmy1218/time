function setDeg(cssVar, deg) {
  document.body.style.setProperty(cssVar, `${deg}deg`);
}

function zeroPad(num) {
  return num < 10 ? "0" + num : num;
}

function updateClock() {
  const tokyoString = new Date().toLocaleString("en-US", { timeZone: "Asia/Tokyo" });
  const now = new Date(tokyoString);
  const year = now.getFullYear();
  const month = zeroPad(now.getMonth() + 1);
  const date = zeroPad(now.getDate());
  const dayNames = ["日", "月", "火", "水", "木", "金", "土"];
  const day = dayNames[now.getDay()];
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const offset = 0; // 3時間15分15秒の遅れが生じてた原
  const secDeg = (seconds / 60) * 360 + offset;
  const minDeg = ((minutes + seconds / 60) / 60) * 360 + offset;
  const hourDeg = ((hours % 12) / 12) * 360 + (minutes / 60) * 30 + (seconds / 3600) * 30 + offset;
  setDeg("--sec-deg", secDeg);
  setDeg("--min-deg", minDeg);
  setDeg("--hour-deg", hourDeg);
  document.getElementById("date").textContent = `${year}/${month}/${date}`;
  document.getElementById("day").textContent = `(${day})`;
}

function main() {
  setInterval(updateClock, 1000);
  updateClock();
}

window.addEventListener("load", main);
