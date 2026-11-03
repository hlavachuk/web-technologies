# 09. Alignment and Centering with align-self

align-self перевизначає align-items для окремого елемента. Третій блок притиснутий до кінця поперечної осі, решта — до початку.

## Реалізація

```css
.demo{display:flex;align-items:flex-start;gap:var(--gap);min-height:320px}.box{flex:1}.box:nth-child(3){align-self:flex-end}
```

Відкрити `index.html`. HTML і CSS можна змінювати без збірки. Приклад адаптовано за темою оригінального уроку, із власною розміткою та оформленням.
