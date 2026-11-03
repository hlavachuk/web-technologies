# 11. Finally understanding Flexbox flex-grow, flex-shrink and flex-basis

basis задає початковий розмір. grow розподіляє надлишок; shrink прибирає нестачу з урахуванням basis. Зменшуй вікно: перший блок стискається інтенсивніше.

## Реалізація

```css
.demo{display:flex;gap:var(--gap)}.box{min-width:0;overflow-wrap:anywhere}.box:first-child{flex:10 5 400px}.box:last-child{flex:1 1 400px}
```

Відкрити `index.html`. HTML і CSS можна змінювати без збірки. Приклад адаптовано за темою оригінального уроку, із власною розміткою та оформленням.
