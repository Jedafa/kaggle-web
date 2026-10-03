# ⚡ Kaggle Web Panel

Веб-панель удалённого управления машиной Kaggle (как SSH, только в браузере):
общий **терминал** (PTY), **статистика сервера** (CPU / RAM / диск / GPU / сеть),
кнопки установки **Ollama + zstd**, запуска **Cloudflare-туннеля** и установки **моделей**.

English: a browser-based control panel for a Kaggle notebook — shared terminal,
server stats, Ollama + zstd installer, Cloudflare tunnel manager and model installer.

## Запуск на Kaggle

1. Открой `kaggle_web_panel.ipynb` (File → Import Notebook) или скопируй код ячейки.
2. В настройках ноутбука включи **Internet → ON** (Settings → Internet).
   Для работы с LLM выбери ускоритель **GPU** (Session options → Accelerator).
3. Запусти ячейку — она сама:
   - склонирует этот репозиторий и установит зависимости (`aiohttp`, `psutil`);
   - скачает `cloudflared`;
   - сгенерирует пароль панели;
   - запустит панель и быстрый туннель;
   - напечатает **URL** (вида `https://xxxx.trycloudflare.com`) и **пароль**.
4. Открой URL, введи пароль — готово.

## Возможности

- **Терминал по центру** — полноценный bash через WebSocket (xterm.js), общий для всех вкладок.
- **Левое меню**: установка Ollama + zstd, запуск/остановка `ollama serve`,
  настройка и запуск Cloudflare-туннеля (quick / token / config), установка моделей
  Ollama (пресеты + свободный ввод), архивация моделей в `.tar.zst`, обновление панели.
- **Справа — статистика**: CPU, RAM, диск, GPU (nvidia-smi), сеть, load average, аптайм.
- **Мини .env**: домен/токен туннеля, порт и пароль панели — сохраняются в `~/.kaggle-panel/.env`.
- **EN / RU / 中文**, светлая и тёмная тема, анимированные кнопки.

## Туннель

| Режим | Что нужно |
|---|---|
| Quick | ничего — случайный `*.trycloudflare.com` URL |
| Token | токен из Cloudflare Zero Trust → Networks → Tunnels; публичный hostname настраивается в дашборде → service `http://localhost:PORT` |
| Config | Tunnel UUID + домен + JSON учётных данных (файл `config.yml` создаётся автоматически) |

## Доступ к моделям онлайн (Ollama API)

Отдельный поддомен **не нужен**. Панель проксирует Ollama прямо через себя:
когда запущены туннель и `ollama serve`, в левой колонке появляется плашка
`<адрес-панели>/ollama` — это адрес твоего Ollama API, доступный из любой точки мира.

- **Нативный API Ollama:** `https://<домен-панели>/ollama/api/generate`, `/api/chat`, `/api/tags`…
- **OpenAI-совместимый:** `https://<домен-панели>/ollama/v1/chat/completions`
  (base_url в приложениях: `https://<домен-панели>/ollama/v1`).
- **Ключ API = пароль панели** (`Authorization: Bearer <пароль панели>`).
- Работает и через quick-туннель, и со своим доменом — в Cloudflare ничего добавлять не надо.
- Если хочется отдать Ollama отдельным поддоменом напрямую — добавь в том же туннеле
  второй Public hostname → `http://localhost:11434`, но учти: тогда API будет открыт **без пароля**.

## Безопасность

- Панель слушает только `127.0.0.1` — снаружи доступна **только через туннель**.
- Доступ защищён паролем (cookie + проверка на каждом API/WS запросе).
- Любой, кто знает URL и пароль, получает shell на твоей машине — не публикуй пароль.
- Сессия Kaggle живёт максимум ~12 (GPU ~9) часов; Kaggle останавливает простаивающие ноутбуки — держи вкладку активной.

## Файлы

```
server.py          — бэкенд: PTY-терминал (WS), API, статистика
static/            — фронтенд (vanilla JS + xterm.js)
requirements.txt   — aiohttp, psutil
kaggle_web_panel.ipynb — ноутбук-лаунчер для Kaggle
```

Панель ставит скрипты в `~/.kaggle-panel/scripts/` (`tunnel.sh`, `restart.sh`, `update.sh`)
и хранит настройки в `~/.kaggle-panel/.env`.
