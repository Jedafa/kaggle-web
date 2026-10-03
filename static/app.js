/* ============ Kaggle Web Panel — frontend ============ */
"use strict";

const I18N = {
  en: {
    title: "Kaggle Web Panel", subtitle: "remote control for your Kaggle machine",
    password: "Password", login: "Sign in", wrong_pass: "Wrong password",
    login_hint: "The password is printed in the Kaggle notebook output.",
    section_setup: "Setup", section_tunnel: "Cloudflare tunnel",
    section_models: "Models", section_extras: "Extras",
    btn_ollama: "Install Ollama + zstd", btn_ollama_serve: "Start Ollama server",
    btn_ollama_stop: "Stop", btn_configure: "Configure (.env)",
    btn_tunnel_start: "Start tunnel", btn_tunnel_stop: "Stop",
    model_ph: "e.g. llama3.2:3b", btn_pull: "Install model", btn_list: "List models",
    btn_archive: "Archive models (zstd)", btn_update: "Update panel (git pull)",
    stats_title: "Server stats", cpu: "CPU", ram: "Memory", disk: "Disk", gpu: "GPU",
    load: "Load avg", net: "Network", uptime: "Uptime", host: "Host",
    modal_title: "Tunnel & server settings", mode: "Mode",
    mode_quick: "Quick (random URL)", mode_token: "Named tunnel (token)",
    mode_config: "Config file (domain + UUID)",
    f_token: "Tunnel token", f_domain: "Domain", f_uuid: "Tunnel UUID",
    f_creds: "Credentials JSON", f_port: "Panel port", f_pass: "Panel password",
    hint_token: "Domain is configured in the Cloudflare Zero Trust dashboard → Public hostname → service http://localhost:PORT",
    save: "Save", cancel: "Cancel", copy: "Copy", copied: "Copied ✓",
    restart: "Restart panel", restart_note: "Port changed — restart the panel to apply",
    toast_saved: "Settings saved", toast_inject: "Sent to terminal",
    toast_saved_pass: "Settings saved — new password is active",
    toast_fail: "Request failed — check connection",
    offline_mode: "WebSocket unavailable — terminal output via polling",
    connected: "connected", disconnected: "disconnected",
    session_end: "Session ended — press Enter to reconnect",
    term_hint: "menu actions are typed here",
    ollama_api_hint: "Ollama API — the key is the panel password (Authorization: Bearer <password>)",
    no_gpu: "not detected", none: "—",
  },
  ru: {
    title: "Kaggle Web-панель", subtitle: "удалённое управление машиной Kaggle",
    password: "Пароль", login: "Войти", wrong_pass: "Неверный пароль",
    login_hint: "Пароль выведен в результатах ячейки Kaggle-ноутбука.",
    section_setup: "Установка", section_tunnel: "Cloudflare туннель",
    section_models: "Модели", section_extras: "Дополнительно",
    btn_ollama: "Установить Ollama + zstd", btn_ollama_serve: "Запустить сервер Ollama",
    btn_ollama_stop: "Остановить", btn_configure: "Настройки (.env)",
    btn_tunnel_start: "Запустить туннель", btn_tunnel_stop: "Остановить",
    model_ph: "например llama3.2:3b", btn_pull: "Установить модель", btn_list: "Список моделей",
    btn_archive: "Архивировать модели (zstd)", btn_update: "Обновить панель (git pull)",
    stats_title: "Статистика сервера", cpu: "Процессор", ram: "Память", disk: "Диск", gpu: "GPU",
    load: "Нагрузка", net: "Сеть", uptime: "Время работы", host: "Хост",
    modal_title: "Настройки туннеля и сервера", mode: "Режим",
    mode_quick: "Быстрый (случайный URL)", mode_token: "Именованный туннель (токен)",
    mode_config: "Файл конфига (домен + UUID)",
    f_token: "Токен туннеля", f_domain: "Домен", f_uuid: "UUID туннеля",
    f_creds: "JSON учётных данных", f_port: "Порт панели", f_pass: "Пароль панели",
    hint_token: "Домен настраивается в панели Cloudflare Zero Trust → Public hostname → service http://localhost:ПОРТ",
    save: "Сохранить", cancel: "Отмена", copy: "Копировать", copied: "Скопировано ✓",
    restart: "Перезапустить панель", restart_note: "Порт изменён — перезапустите панель, чтобы применить",
    toast_saved: "Настройки сохранены", toast_inject: "Отправлено в терминал",
    toast_saved_pass: "Настройки сохранены — новый пароль активен",
    toast_fail: "Ошибка запроса — проверьте соединение",
    offline_mode: "WebSocket недоступен — вывод терминала через polling",
    connected: "подключено", disconnected: "отключено",
    session_end: "Сессия завершена — нажмите Enter для переподключения",
    term_hint: "действия из меню печатаются здесь",
    ollama_api_hint: "Ollama API — ключ = пароль панели (Authorization: Bearer <пароль>)",
    no_gpu: "не обнаружен", none: "—",
  },
  zh: {
    title: "Kaggle 网页面板", subtitle: "远程控制你的 Kaggle 机器",
    password: "密码", login: "登录", wrong_pass: "密码错误",
    login_hint: "密码显示在 Kaggle notebook 的输出中。",
    section_setup: "安装", section_tunnel: "Cloudflare 隧道",
    section_models: "模型", section_extras: "更多",
    btn_ollama: "安装 Ollama + zstd", btn_ollama_serve: "启动 Ollama 服务",
    btn_ollama_stop: "停止", btn_configure: "配置 (.env)",
    btn_tunnel_start: "启动隧道", btn_tunnel_stop: "停止",
    model_ph: "例如 llama3.2:3b", btn_pull: "安装模型", btn_list: "模型列表",
    btn_archive: "打包模型 (zstd)", btn_update: "更新面板 (git pull)",
    stats_title: "服务器状态", cpu: "处理器", ram: "内存", disk: "磁盘", gpu: "GPU",
    load: "负载", net: "网络", uptime: "运行时间", host: "主机",
    modal_title: "隧道与服务器设置", mode: "模式",
    mode_quick: "快速模式（随机网址）", mode_token: "命名隧道（Token）",
    mode_config: "配置文件（域名 + UUID）",
    f_token: "隧道 Token", f_domain: "域名", f_uuid: "隧道 UUID",
    f_creds: "凭据 JSON", f_port: "面板端口", f_pass: "面板密码",
    hint_token: "域名需在 Cloudflare Zero Trust 控制台配置 → Public hostname → service http://localhost:端口",
    save: "保存", cancel: "取消", copy: "复制", copied: "已复制 ✓",
    restart: "重启面板", restart_note: "端口已更改 — 请重启面板以生效",
    toast_saved: "设置已保存", toast_inject: "已发送到终端",
    toast_saved_pass: "设置已保存 — 新密码已生效",
    toast_fail: "请求失败 — 请检查连接",
    offline_mode: "WebSocket 不可用 — 终端输出通过轮询",
    connected: "已连接", disconnected: "已断开",
    session_end: "会话已结束 — 按 Enter 重新连接",
    term_hint: "菜单操作会在此输入",
    ollama_api_hint: "Ollama API — 密钥即面板密码（Authorization: Bearer <密码>）",
    no_gpu: "未检测到", none: "—",
  },
};

const $ = (s) => document.querySelector(s);
const state = {
  token: localStorage.getItem("panel_token") || "",
  lang: localStorage.getItem("panel_lang") || "en",
  theme: localStorage.getItem("panel_theme") || "dark",
  ws: null, wsUp: false, decoder: null, fit: null, term: null,
  outSid: null, outSeq: 0,
  portBefore: null,
};

const MODEL_PRESETS = ["llama3.2:3b", "qwen2.5:7b", "gemma2:2b", "phi3:mini", "deepseek-r1:7b", "mistral:7b"];

/* ---------------- i18n ---------------- */
function t(key) {
  return (I18N[state.lang] && I18N[state.lang][key]) || I18N.en[key] || key;
}
function applyLang() {
  document.documentElement.lang = state.lang;
  document.querySelectorAll("[data-i18n]").forEach((el) => { el.textContent = t(el.dataset.i18n); });
  document.querySelectorAll("[data-i18n-ph]").forEach((el) => { el.placeholder = t(el.dataset.i18nPh); });
  document.querySelectorAll(".lang-switch button").forEach((b) =>
    b.classList.toggle("active", b.dataset.lang === state.lang));
  localStorage.setItem("panel_lang", state.lang);
}

/* ---------------- theme ---------------- */
function applyTheme() {
  document.documentElement.dataset.theme = state.theme;
  $("#theme-toggle").textContent = state.theme === "dark" ? "🌙" : "☀️";
  localStorage.setItem("panel_theme", state.theme);
  if (state.term) {
    state.term.options.theme = state.theme === "dark"
      ? { background: "transparent", foreground: "#d8dee9", cursor: "#6c5ce7", selectionBackground: "rgba(108,92,231,.4)" }
      : { background: "#0d1017", foreground: "#d8dee9", cursor: "#6c5ce7", selectionBackground: "rgba(108,92,231,.4)" };
  }
}

/* ---------------- toasts ---------------- */
function toast(msg) {
  const el = document.createElement("div");
  el.className = "toast";
  el.textContent = msg;
  $("#toasts").appendChild(el);
  setTimeout(() => { el.classList.add("out"); setTimeout(() => el.remove(), 320); }, 2600);
}

/* ---------------- api ---------------- */
async function api(path, opts = {}) {
  opts.headers = Object.assign({ "X-Auth": state.token, "Content-Type": "application/json" }, opts.headers || {});
  const r = await fetch(path, opts);
  if (r.status === 401 && !path.startsWith("/api/login")) { showLogin(); throw new Error("unauthorized"); }
  return r;
}
const apiGet = (p) => api(p).then((r) => r.json());
const apiPost = (p, body) => api(p, { method: "POST", body: JSON.stringify(body) }).then((r) => r.json());

/* ---------------- auth ---------------- */
function showLogin() {
  $("#app").classList.add("hidden");
  $("#login").classList.remove("hidden");
  $("#login-pass").focus();
}
function showApp() {
  $("#login").classList.add("hidden");
  $("#app").classList.remove("hidden");
  initTerminal();
}

async function tryVerify() {
  if (!state.token) { showLogin(); return; }
  try {
    const r = await fetch("/api/verify", { headers: { "X-Auth": state.token } });
    if (r.ok) showApp(); else showLogin();
  } catch { showLogin(); }
}

$("#login-btn").addEventListener("click", doLogin);
$("#login-pass").addEventListener("keydown", (e) => { if (e.key === "Enter") doLogin(); });
async function doLogin() {
  const pass = $("#login-pass").value;
  try {
    const r = await fetch("/api/login", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ password: pass }) });
    if (!r.ok) throw new Error("bad");
    const d = await r.json();
    state.token = d.token;
    localStorage.setItem("panel_token", d.token);
    $("#login-err").classList.add("hidden");
    $("#login-pass").value = "";
    showApp();
  } catch {
    $("#login-err").classList.remove("hidden");
    const c = $(".login-card");
    c.classList.remove("shake"); void c.offsetWidth; c.classList.add("shake");
  }
}
$("#logout").addEventListener("click", () => {
  localStorage.removeItem("panel_token");
  state.token = "";
  if (state.ws) { try { state.ws.close(); } catch {} }
  showLogin();
});

/* ---------------- terminal ---------------- */
function decodeB64(b64) {
  return state.decoder.decode(Uint8Array.from(atob(b64), (c) => c.charCodeAt(0)), { stream: true });
}
/* apply one output chunk (from WS or poll) with session + ordering dedup */
function applyOut(d) {
  if (!state.term || typeof d.seq !== "number") return;
  if (d.sid !== state.outSid) {           /* new shell session on the server */
    state.term.reset();
    state.decoder = new TextDecoder("utf-8");
    state.outSid = d.sid;
    state.outSeq = 0;
    if (!d.data) return;
  }
  if (d.seq <= state.outSeq) return;      /* already shown */
  if (d.data) state.term.write(decodeB64(d.data));
  state.outSeq = d.seq;
}
async function pollOutput() {
  if (!state.term) return;
  try {
    const r = await fetch(`/api/output?offset=${state.outSeq}&sid=${encodeURIComponent(state.outSid || "")}`,
      { headers: { "X-Auth": state.token } });
    if (r.status === 401) { showLogin(); return; }
    applyOut(await r.json());
  } catch {}
}
function sendResize() {
  if (!state.term) return;
  if (state.ws && state.wsUp) {
    state.ws.send(JSON.stringify({ type: "resize", cols: state.term.cols, rows: state.term.rows }));
  } else {
    apiPost("/api/input", { cols: state.term.cols, rows: state.term.rows }).catch(() => {});
  }
}
function initTerminal() {
  if (state.term) { setTimeout(() => state.fit && state.fit.fit(), 60); return; }
  state.decoder = new TextDecoder("utf-8");
  state.term = new Terminal({
    fontFamily: 'ui-monospace, "JetBrains Mono", "Cascadia Code", Menlo, Consolas, monospace',
    fontSize: 14, cursorBlink: true, scrollback: 5000,
    theme: { background: "transparent", foreground: "#d8dee9", cursor: "#6c5ce7" },
  });
  window.__term = state.term; /* debug/testing hook */
  state.fit = new FitAddon.FitAddon();
  state.term.loadAddon(state.fit);
  state.term.open($("#terminal"));
  applyTheme();
  state.term.onData((data) => {
    if (state.ws && state.wsUp) state.ws.send(JSON.stringify({ type: "input", data }));
    else apiPost("/api/input", { data }).catch(() => {});
  });
  new ResizeObserver(() => {
    if (!state.fit) return;
    try {
      state.fit.fit();
      sendResize();
    } catch {}
  }).observe($("#terminal"));
  connectWS();
}

function connectWS() {
  const proto = location.protocol === "https:" ? "wss" : "ws";
  const ws = new WebSocket(`${proto}://${location.host}/ws/term?auth=${encodeURIComponent(state.token)}`);
  state.ws = ws;
  ws.onopen = () => {
    state.wsUp = true;
    setConn(true);
    if (!state.welcomed) {
      state.welcomed = true;
      state.term.write(`\x1b[1;35m⚡ ${t("title")}\x1b[0m \x1b[90m— ${t("term_hint")}\x1b[0m\r\n\r\n`);
    }
    sendResize();
  };
  ws.onmessage = (ev) => {
    let d;
    try { d = JSON.parse(ev.data); } catch { return; }
    if (d.type === "out") applyOut(d);
    else if (d.type === "exit") state.term.write(`\r\n\x1b[1;33m${t("session_end")}\x1b[0m\r\n`);
  };
  ws.onclose = () => {
    state.wsUp = false;
    setConn(false);
    setTimeout(connectWS, 1800);
  };
  ws.onerror = () => ws.close();
}
function setConn(up) {
  $("#conn-dot").classList.toggle("on", up);
  $("#conn-label").textContent = up ? t("connected") : t("disconnected");
}

/* ---------------- actions ---------------- */
const BASE_DIR = "$HOME/.kaggle-panel";
const CMD = {
  installOllama:
    `if ! command -v ollama >/dev/null 2>&1; then curl -fsSL https://ollama.com/install.sh | sh; else echo "[panel] ollama already installed: $(ollama --version)"; fi; ` +
    `(apt-get install -y zstd >/dev/null 2>&1 || sudo apt-get install -y zstd >/dev/null 2>&1 || pip install -q zstandard 2>/dev/null || true); echo "[panel] zstd: $(zstd --version 2>/dev/null || echo 'check manually')"`,
  serveStart:
    `pgrep -x ollama >/dev/null 2>&1 && echo "[panel] ollama serve already running" || { nohup ollama serve >${BASE_DIR}/ollama.log 2>&1 & sleep 2; echo "[panel] ollama serve started (port 11434)"; }`,
  serveStop: `pkill -f "ollama serve" && echo "[panel] ollama serve stopped" || echo "[panel] ollama serve not running"`,
  tunnelStart: `bash ${BASE_DIR}/scripts/tunnel.sh start`,
  tunnelStop: `bash ${BASE_DIR}/scripts/tunnel.sh stop`,
  archive:
    `mkdir -p ${BASE_DIR}/backup && cd ~/.ollama/models 2>/dev/null && tar -I zstd -cf ${BASE_DIR}/backup/ollama-models-$(date +%m%d-%H%M).tar.zst . && ls -lh ${BASE_DIR}/backup/ || echo "[panel] no ~/.ollama/models directory"`,
  update: `bash ${BASE_DIR}/scripts/update.sh`,
};

async function inject(cmd) {
  try {
    await apiPost("/api/inject", { cmd });
    toast(t("toast_inject"));
    if (!state.wsUp) toast("⚠ " + t("offline_mode"));
  } catch {
    toast("⚠ " + t("toast_fail"));
  }
}

$("#btn-ollama").addEventListener("click", () => inject(CMD.installOllama));
$("#btn-serve").addEventListener("click", () => inject(CMD.serveStart));
$("#btn-serve-stop").addEventListener("click", () => inject(CMD.serveStop));
$("#btn-tunnel-start").addEventListener("click", () => inject(CMD.tunnelStart));
$("#btn-tunnel-stop").addEventListener("click", () => inject(CMD.tunnelStop));
$("#btn-archive").addEventListener("click", () => inject(CMD.archive));
$("#btn-update").addEventListener("click", () => inject(CMD.update));
$("#btn-list").addEventListener("click", () => inject("ollama list"));

document.querySelectorAll(".chips .chip[data-cmd]").forEach((b) =>
  b.addEventListener("click", () => inject(b.dataset.cmd)));

/* model install */
const modelInput = $("#model-input");
MODEL_PRESETS.forEach((m) => {
  const b = document.createElement("button");
  b.className = "chip";
  b.textContent = m;
  b.addEventListener("click", () => { modelInput.value = m; });
  $("#model-presets").appendChild(b);
});
$("#btn-pull").addEventListener("click", () => {
  const m = modelInput.value.trim();
  if (!m || !/^[A-Za-z0-9._:/\-]+$/.test(m)) { toast("⚠ " + t("model_ph")); return; }
  inject(
    `pgrep -x ollama >/dev/null 2>&1 || { nohup ollama serve >${BASE_DIR}/ollama.log 2>&1 & sleep 2; }; ` +
    `echo "[panel] pulling ${m} ..."; ollama pull ${m} && echo "[panel] ✓ ${m} installed"`
  );
});

/* ---------------- .env modal ---------------- */
$("#btn-config").addEventListener("click", openModal);
$("#env-cancel").addEventListener("click", () => $("#modal").classList.add("hidden"));
$("#modal").addEventListener("click", (e) => { if (e.target === $("#modal")) $("#modal").classList.add("hidden"); });

async function openModal() {
  try {
    const d = await apiGet("/api/env");
    $("#env-mode").value = d.mode || "quick";
    $("#env-token").value = "";
    $("#env-token").placeholder = d.cf_token_set ? "•••• (saved)" : "eyJhIjoi...";
    $("#env-domain").value = d.cf_domain || "";
    $("#env-uuid").value = d.tunnel_uuid || "";
    $("#env-creds").value = "";
    $("#env-port").value = d.panel_port || "7860";
    state.portBefore = d.panel_port || "7860";
    $("#env-pass").value = "";
    applyModeVisibility();
    $("#modal").classList.remove("hidden");
  } catch {}
}
function applyModeVisibility() {
  const mode = $("#env-mode").value;
  document.querySelectorAll(".mode-token").forEach((el) => el.classList.toggle("hidden", mode !== "token"));
  document.querySelectorAll(".mode-config").forEach((el) => el.classList.toggle("hidden", mode !== "config"));
}
$("#env-mode").addEventListener("change", applyModeVisibility);

$("#env-save").addEventListener("click", async () => {
  const mode = $("#env-mode").value;
  const body = {
    cf_token: mode === "token" ? ($("#env-token").value.trim() || "__KEEP__") : "",
    cf_domain: $("#env-domain").value.trim(),
    tunnel_uuid: mode === "config" ? $("#env-uuid").value.trim() : "",
    credentials: mode === "config" && $("#env-creds").value.trim() ? $("#env-creds").value.trim() : "__KEEP__",
    panel_port: $("#env-port").value.trim() || "7860",
    panel_password: $("#env-pass").value.trim(),
  };
  if (body.cf_token === "__KEEP__") delete body.cf_token;
  if (body.credentials === "__KEEP__") delete body.credentials;
  if (mode === "config" && !body.credentials) delete body.credentials;
  try {
    const d = await apiPost("/api/env", body);
    if (d.token) { state.token = d.token; localStorage.setItem("panel_token", d.token); }
    $("#modal").classList.add("hidden");
    toast(body.panel_password ? t("toast_saved_pass") : t("toast_saved"));
    if (state.portBefore && body.panel_port !== state.portBefore) {
      toast("↻ " + t("restart_note"));
      setTimeout(() => apiPost("/api/restart", {}).catch(() => {}), 1200);
    }
  } catch {}
});

/* ---------------- tunnel url chip ---------------- */
$("#tunnel-copy").addEventListener("click", () => {
  const url = $("#tunnel-url").textContent;
  if (url && navigator.clipboard) navigator.clipboard.writeText(url).then(() => toast(t("copied")));
});
$("#ollama-copy").addEventListener("click", () => {
  const url = $("#ollama-url").textContent;
  if (url && navigator.clipboard) navigator.clipboard.writeText(url).then(() => toast(t("copied")));
});

/* ---------------- polling: stats + status ---------------- */
function fmtBytes(n) {
  if (n > 1 << 30) return (n / (1 << 30)).toFixed(1) + " GB";
  if (n > 1 << 20) return (n / (1 << 20)).toFixed(0) + " MB";
  return (n / 1024).toFixed(0) + " KB";
}
function fmtUptime(s) {
  const h = Math.floor(s / 3600), m = Math.floor((s % 3600) / 60);
  return `${h}h ${m}m`;
}
function setBar(id, pct) {
  const bar = $(id);
  bar.style.width = Math.min(pct, 100) + "%";
  bar.classList.toggle("hot", pct > 85);
}
function renderStats(d) {
  $("#s-cpu-v").textContent = d.cpu.toFixed(0) + "%";
  setBar("#s-cpu", d.cpu);
  $("#s-ram-v").textContent = fmtBytes(d.ram_used) + " / " + fmtBytes(d.ram_total);
  setBar("#s-ram", d.ram_pct);
  $("#s-disk-v").textContent = fmtBytes(d.disk_used) + " / " + fmtBytes(d.disk_total);
  setBar("#s-disk", d.disk_pct);
  if (d.gpus && d.gpus.length) {
    const g = d.gpus[0];
    $("#s-gpu-name").textContent = g.name;
    $("#s-gpu-name").title = g.name;
    setBar("#s-gpu", g.util);
    $("#s-gpu-mem").textContent = fmtBytes(g.mem_used * 1048576) + " / " + fmtBytes(g.mem_total * 1048576);
    $("#s-gpu-temp").textContent = g.temp.toFixed(0) + "°C";
  } else {
    $("#s-gpu-name").textContent = t("no_gpu");
    setBar("#s-gpu", 0);
    $("#s-gpu-mem").textContent = "";
    $("#s-gpu-temp").textContent = "";
  }
  $("#s-load").textContent = d.load.join(" / ");
  $("#s-net").textContent = "↑" + fmtBytes(d.net_up) + "/s ↓" + fmtBytes(d.net_down) + "/s";
  $("#s-uptime").textContent = fmtUptime(d.uptime);
  $("#s-host").textContent = d.host;
  $("#s-host").title = d.host;
}

function renderStatus(d) {
  $("#dot-ollama").className = "dot" + (d.ollama_installed ? " on" : "");
  $("#dot-tunnel").className = "dot" + (d.tunnel_running ? " on" : "");
  const chip = $("#tunnel-chip");
  const ochip = $("#ollama-chip");
  if (d.tunnel_url) {
    chip.classList.remove("hidden");
    $("#tunnel-url").textContent = d.tunnel_url;
    $("#tunnel-url").href = d.tunnel_url;
  } else if (d.tunnel_running) {
    chip.classList.remove("hidden");
    $("#tunnel-url").textContent = "🔒 " + d.tunnel_mode;
    $("#tunnel-url").removeAttribute("href");
  } else {
    chip.classList.add("hidden");
  }
  if (d.tunnel_running && d.ollama_serve) {
    ochip.classList.remove("hidden");
    $("#ollama-url").textContent = location.origin + "/ollama";
    $("#ollama-url").title = t("ollama_api_hint");
  } else {
    ochip.classList.add("hidden");
  }
  const box = $("#models-box");
  if (!box.classList.contains("hidden")) {
    box.innerHTML = d.models.length
      ? d.models.map((m) => `<div><b>${m.name}</b><span>${m.size}</span></div>`).join("")
      : `<div><b>—</b></div>`;
  }
}
$("#btn-list").addEventListener("click", () => {
  $("#models-box").classList.remove("hidden");
});

async function pollStats() {
  try { renderStats(await apiGet("/api/stats")); } catch {}
}
async function pollStatus() {
  try { renderStatus(await apiGet("/api/status")); } catch {}
}

/* ---------------- topbar ---------------- */
document.querySelectorAll(".lang-switch button").forEach((b) =>
  b.addEventListener("click", () => { state.lang = b.dataset.lang; applyLang(); }));
$("#theme-toggle").addEventListener("click", () => {
  state.theme = state.theme === "dark" ? "light" : "dark";
  applyTheme();
});

/* ---------------- boot ---------------- */
applyLang();
applyTheme();
tryVerify();
setInterval(pollStats, 2000);
setInterval(pollStatus, 4000);
setInterval(pollOutput, 1000);   /* safety net + terminal fallback channel */
pollStats();
pollStatus();
