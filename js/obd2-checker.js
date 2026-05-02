(function () {

const DTC_DB = {
  "P0420": {
    title: "触媒効率低下",
    severity: "中",
    desc: "触媒の効率が低下しています",
    fix: "O2センサー・触媒交換の可能性",
    cost: "¥50,000〜¥150,000"
  },
  "P0300": {
    title: "ランダム失火",
    severity: "高",
    desc: "エンジンが正常に燃焼していません",
    fix: "点火系・プラグ・コイル点検",
    cost: "¥10,000〜¥50,000"
  }
};

function init() {
  const root = document.getElementById("obd2-dtc-checker");
  if (!root) return;

  root.innerHTML = `
    <div class="obd-box">
      <input class="obd-input" placeholder="例: P0420">
      <button class="obd-btn">診断する</button>
      <div class="obd-result"></div>
    </div>
  `;

  const input = root.querySelector(".obd-input");
  const btn = root.querySelector(".obd-btn");
  const result = root.querySelector(".obd-result");

  btn.onclick = () => {
    const code = input.value.trim().toUpperCase();
    const data = DTC_DB[code];

    if (!data) {
      result.innerHTML = "該当データがありません";
      return;
    }

    result.innerHTML = `
      <h3>${code}：${data.title}</h3>
      <p><strong>危険度：</strong>${data.severity}</p>
      <p>${data.desc}</p>
      <p><strong>対応：</strong>${data.fix}</p>
      <p><strong>費用目安：</strong>${data.cost}</p>
    `;
  };
}

document.addEventListener("DOMContentLoaded", init);

})();
