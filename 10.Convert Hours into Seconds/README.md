# Convert Hours into Seconds

## 📌 Challenge Description

Write a function that converts hours into seconds.

---

## 🧠 Examples

---
howManySeconds(2) ➞ 7200

howManySeconds(10) ➞ 36000

howManySeconds(24) ➞ 86400

## 📝 Notes

- 60 seconds in a minute, 60 minutes in an hour
- Don't forget to return your answer.
---

## 💻 Solution

```javascript
function circuitPower(sec) {
    return sec*60*60;
}

console.log(howManySeconds(2))   // 7200
console.log(howManySeconds(10))  // 36000
console.log(howManySeconds(24))  // 86400