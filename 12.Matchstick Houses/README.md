# Matchstick Houses

## 📌 Challenge Description

This challenge will help you interpret mathematical relationships both algebraically and geometrically.

Create a function that takes a number (step) as an argument and returns the number of matchsticks in that step. See step 1, 2 and 3 in the image above.
---

## 🧠 Examples

---
Examples
matchHouses(1) ➞ 6

matchHouses(4) ➞ 21

matchHouses(87) ➞ 436

## 📝 Notes

Notes
- Step 0 returns 0 matchsticks.
- The input (step) will always be a non-negative integer.
- Think of the input (step) as the total number of houses that have been connected    together.
---

## 💻 Solution

```javascript
function matchHouses(num) {
    return num === 0 ? 0 : 1+num*5;
}

addUp(4) ➞ 10

addUp(13) ➞ 91

addUp(600) ➞ 180300