# 08. Alignment and Centering with align-content

align-content вирівнює сукупність flex-рядків по поперечній осі. Потрібні багаторядковий контейнер та вільне місце по цій осі.

## Реалізація

```css
.demo{display:flex;flex-wrap:wrap;align-content:space-between;gap:var(--gap);min-height:440px}.box{flex:0 0 calc((100% - 2 * var(--gap))/3)}
```

Відкрити `index.html`. HTML і CSS можна змінювати без збірки. Приклад адаптовано за темою оригінального уроку, із власною розміткою та оформленням.
