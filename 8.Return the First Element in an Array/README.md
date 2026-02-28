# Return the First Element in an Array

## 📌 Challenge Description

Create a function that takes an array containing only numbers and return the first element.
---

## 🧠 Examples

---
getFirstValue([1, 2, 3]) ➞ 1

getFirstValue([80, 5, 100]) ➞ 80

getFirstValue([-500, 0, 50]) ➞ -500

## 📝 Notes

- READ EVERY WORD CAREFULLY, CHARACTER BY CHARACTER!
- Don't overthink this challenge; it's not supposed to be hard.
---

## 💻 Solution

```javascript
function getFirstValue(arr) {
    return arr[0];
}

console.log(getFirstValue([1, 2, 3]) )   // 27
console.log(getFirstValue([80, 5, 100]))   // 125
console.log(getFirstValue([-500, 0, 50]) )  // 1000