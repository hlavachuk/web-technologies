# 18. Flexbox Equal height columns and leftover elements

align-items:stretch дає однакову висоту елементам одного рядка. flex-grow розтягує останній неповний рядок. Картки всередині — стовпці з кнопкою внизу.

## Реалізація

```css
.equal-grid{display:flex;flex-wrap:wrap;gap:var(--gap);align-items:stretch}.equal-grid article{display:flex;flex-direction:column;flex:1 1 240px;padding:24px;background:var(--panel)}.equal-grid .cta{margin-top:auto}
```

Відкрити `index.html`. HTML і CSS можна змінювати без збірки. Приклад адаптовано за темою оригінального уроку, із власною розміткою та оформленням.
