# 17. Flexbox Pricing Grid

Зовнішній flex-контейнер ділить місце між тарифами. Кожен тариф — вкладений стовпець. margin-top:auto притискає кнопку донизу за різної довжини описів.

## Реалізація

```css
.pricing{display:flex;flex-wrap:wrap;gap:var(--gap);align-items:stretch}.plan{display:flex;flex-direction:column;flex:1 1 220px;background:var(--panel);padding:24px}.plan ul{margin-block:24px}.plan li{padding-block:10px;border-bottom:1px solid var(--line)}.plan .price{font-size:36px}.plan .cta{margin-top:auto}
```

Відкрити `index.html`. HTML і CSS можна змінювати без збірки. Приклад адаптовано за темою оригінального уроку, із власною розміткою та оформленням.
