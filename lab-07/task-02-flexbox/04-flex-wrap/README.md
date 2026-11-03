# 04. Wrapping elements with Flexbox

За nowrap елементи стискаються в одному рядку. wrap дозволяє нові рядки. flex-flow — скорочення flex-direction та flex-wrap.

## Реалізація

```css
.demo{display:flex;flex-wrap:wrap;gap:var(--gap)}.box{flex:0 0 calc((100% - 2 * var(--gap))/3)}
```

Відкрити `index.html`. HTML і CSS можна змінювати без збірки. Приклад адаптовано за темою оригінального уроку, із власною розміткою та оформленням.
