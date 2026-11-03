# 15. Mobile content reordering with Flexbox

Flexbox і media-запит змінюють розташування блоків на мобільному. Приклад з order навмисно змінює візуальний порядок; у реальному проєкті DOM має залишатися логічним для читача.

## Реалізація

```css
.layout{display:flex;flex-direction:column;gap:var(--gap)}.layout>*{padding:24px;background:var(--panel)}.layout nav{order:-1}@media(min-width:768px){.layout{flex-flow:row wrap}.layout header{flex-basis:100%}.layout nav{order:0;flex:1}.layout article{flex:3}.layout footer{flex-basis:100%}}
```

Відкрити `index.html`. HTML і CSS можна змінювати без збірки. Приклад адаптовано за темою оригінального уроку, із власною розміткою та оформленням.
