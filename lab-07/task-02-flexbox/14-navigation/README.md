# 14. Pure Flexbox navigation code along

Навігація використовує вкладені flex-контейнери ul та li. Звичайні посилання мають flex:3, короткі соціальні — flex:1. Медіазапити перебудовують меню на вузьких екранах.

## Реалізація

```css
.flex-nav ul{display:flex;flex-wrap:wrap}.flex-nav li{flex:1 1 100%}.flex-nav a{display:flex;align-items:center;justify-content:center;min-height:64px;padding:12px;background:var(--dark);color:var(--white);border:1px solid var(--line)}@media(min-width:500px){.flex-nav li{flex-basis:50%}.flex-nav .social{flex:1 1 25%}}@media(min-width:1000px){.flex-nav li{flex:3}.flex-nav .social{flex:1}}
```

Відкрити `index.html`. HTML і CSS можна змінювати без збірки. Приклад адаптовано за темою оригінального уроку, із власною розміткою та оформленням.
