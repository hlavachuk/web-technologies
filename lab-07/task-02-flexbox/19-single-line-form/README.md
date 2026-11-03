# 19. Flexbox single line form

Форма — flex-контейнер. Поле пошуку отримує більше простору, поля дати — власний basis. wrap зберігає зручність форми на мобільному. Надсилання тут локальне, дані не передаються.

## Реалізація

```css
.booking{display:flex;flex-wrap:wrap;gap:var(--gap);align-items:flex-end;padding:24px;background:var(--panel)}.booking label{display:flex;flex-direction:column;flex:1 1 145px;gap:8px;min-width:0}.booking label:first-child{flex:3 1 220px}.booking input,.booking select{width:100%;min-width:0;min-height:48px;padding:10px;border:1px solid var(--line)}.booking button{flex:1 1 130px;min-height:48px}
```

Відкрити `index.html`. HTML і CSS можна змінювати без збірки. Приклад адаптовано за темою оригінального уроку, із власною розміткою та оформленням.
