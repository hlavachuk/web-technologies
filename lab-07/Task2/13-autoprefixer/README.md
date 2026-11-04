# Урок 13 — Підтримка браузерів та Autoprefixer

[Відкрити вправу](index.html) · [Назад до всіх уроків](../index.html)

- `css/styles.css` — вхідний CSS.
- `build/styles.css` — результат реального запуску PostCSS та Autoprefixer.
- `css/setup.css` — оформлення прикладу та підпис уроку.
- `package.json` і `pnpm-lock.yaml` — залежності та їх зафіксовані версії.
- `gulpfile.js` — сучасний запуск тієї самої послідовності PostCSS → Autoprefixer без старого Gulp 3.

Запуск: `npm install`, потім `npm run build` або `node gulpfile.js` у цій папці. Перегляд уже зібраного прикладу не потребує Node.js.

Джерело вправи: https://github.com/wesbos/What-The-Flexbox/tree/93da0642349f213be4c38457a73eedfee82bfc23/autoprefixer
