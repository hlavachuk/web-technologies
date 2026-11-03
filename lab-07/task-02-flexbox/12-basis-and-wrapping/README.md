# 12. How Flexbox’s flex-basis and wrapping work together

Під час перенесення враховується flex-basis. Кожен рядок розподіляє вільне місце незалежно. Останній елемент розтягується, бо має flex-grow:1.

## Реалізація

```css
.demo{display:flex;flex-wrap:wrap;gap:var(--gap)}.box{flex:1 1 220px;min-width:0}.box:nth-child(3){flex-grow:5}.box:nth-child(4){flex-basis:100px}
```

Відкрити `index.html`. HTML і CSS можна змінювати без збірки. Приклад адаптовано за темою оригінального уроку, із власною розміткою та оформленням.
