# 07. Alignment and Centering with align-items

align-items вирівнює елементи всередині кожного рядка по поперечній осі. Тут center ставить елементи різної висоти на спільну середину.

## Реалізація

```css
.demo{display:flex;align-items:center;gap:var(--gap);min-height:300px}.box{flex:1}.box:nth-child(2){min-height:190px}.box:nth-child(3){min-height:130px}
```

Відкрити `index.html`. HTML і CSS можна змінювати без збірки. Приклад адаптовано за темою оригінального уроку, із власною розміткою та оформленням.
