function setDeg(cssVar, deg) {
    document.body.style.setProperty(cssVar, `${deg}deg`);
  }
  
  function updateClock() {
    // 日本時間
    const tokyoString = new Date().toLocaleString("en-US", { timeZone: "Asia/Tokyo" });
    const now = new Date(tokyoString);

    const hours   = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

// 3時間15分15秒の遅れが生じてた原因
    const offset = 0;

    // 秒針
    const secDeg = (seconds / 60) * 360 + offset;
    // 分針
    const minDeg = ((minutes + seconds / 60) / 60) * 360 + offset;
    // 時針
    const hourDeg =
      ((hours % 12) / 12) * 360 +
      (minutes / 60) * 30 +
      (seconds / 3600) * 30 +
      offset;
  
    setDeg("--sec-deg", secDeg);
    setDeg("--min-deg", minDeg);
    setDeg("--hour-deg", hourDeg);
  }
  
  function main() {
    setInterval(updateClock, 1000);
    updateClock();
  }
  
  window.addEventListener("load", main);
  