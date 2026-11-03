# 06. Flexbox Alignment and Centering with justify-content

justify-content розподіляє вільне місце вздовж головної осі. У row це горизонталь, у column — вертикаль. space-between залишає однакові проміжки між елементами.

## Реалізація

```css
.demo{display:flex;justify-content:space-between;gap:var(--gap);min-height:220px;align-items:flex-start}.box{flex:0 1 100px}
```

Відкрити `index.html`. HTML і CSS можна змінювати без збірки. Приклад адаптовано за темою оригінального уроку, із власною розміткою та оформленням.
