# 16. Nesting Flexbox for vertical and horizontal centering with Flexbox

Кожен рівень вкладення може бути окремим flex-контейнером. Тут ul ділить простір між li, а вкладені посилання центрують текст у двох вимірах.

## Реалізація

```css
.slide{display:flex;align-items:center;justify-content:center;min-height:250px;background:var(--dark);color:var(--white);font-size:40px}.slider-nav ul{display:flex}.slider-nav li{display:flex;flex:2}.slider-nav li.arrow{flex:1}.slider-nav a{display:flex;flex:1;align-items:center;justify-content:center;text-align:center;padding:20px 8px;background:var(--panel);border:1px solid var(--line)}
```

Відкрити `index.html`. HTML і CSS можна змінювати без збірки. Приклад адаптовано за темою оригінального уроку, із власною розміткою та оформленням.
