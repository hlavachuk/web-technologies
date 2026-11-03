# 10. Understanding Flexbox sizing with the flex property

flex поєднує grow, shrink та basis. За однакового нульового basis значення 1:2:1 ділять доступне місце пропорційно, якщо мінімальні розміри вмісту не обмежують елементи.

## Реалізація

```css
.demo{display:flex;gap:var(--gap)}.box{flex:1;min-width:0}.box:nth-child(2){flex:2}
```

Відкрити `index.html`. HTML і CSS можна змінювати без збірки. Приклад адаптовано за темою оригінального уроку, із власною розміткою та оформленням.
