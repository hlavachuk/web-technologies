# 20. Create a mobile app layout with Flexbox

Кореневий блок застосунку — стовпець фіксованої висоти. Header і нижня навігація не стискаються; центральний вміст має flex:1, min-height:0 та overflow-y:auto.

## Реалізація

```css
.app{display:flex;flex-direction:column;max-width:460px;height:560px;margin:auto;border:8px solid var(--dark);background:var(--white)}.app-header{display:flex;align-items:center;justify-content:space-between;padding:16px;background:var(--accent);flex-shrink:0}.app-header h2{margin:0;font-size:20px}.app-content{flex:1;min-height:0;overflow-y:auto;padding:24px}.app-nav{display:flex;flex-shrink:0;background:var(--dark)}.app-nav a{flex:1;min-width:0;text-align:center;padding:18px 4px;color:var(--white)}
```

Відкрити `index.html`. HTML і CSS можна змінювати без збірки. Приклад адаптовано за темою оригінального уроку, із власною розміткою та оформленням.
