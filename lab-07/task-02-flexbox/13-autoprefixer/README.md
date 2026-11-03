# 13. Cross Browser Flexbox Support and Autoprefixer!

Autoprefixer додає префікси згідно з Browserslist. Сучасним браузерам старі префікси зазвичай не потрібні. Поруч з прикладом є вхідний CSS, історичний приклад префіксів та конфігурація відтворюваної збірки.

## Реалізація

```css
.demo{display:flex;flex-direction:column;align-content:center;justify-content:center;min-height:280px}.box:first-child{flex:10 5 140px}.box:last-child{flex:1 1 100px}
```

Відкрити `index.html`. HTML і CSS можна змінювати без збірки. Приклад адаптовано за темою оригінального уроку, із власною розміткою та оформленням.
