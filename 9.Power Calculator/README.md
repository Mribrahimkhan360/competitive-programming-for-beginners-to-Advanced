# Power Calculator

## 📌 Challenge Description

Create a function that takes voltage and current and returns the calculated power.

---

## 🧠 Examples

---
circuitPower(230, 10) ➞ 2300

circuitPower(110, 3) ➞ 330

circuitPower(480, 20) ➞ 9600

## 📝 Notes

- READ EVERY WORD CAREFULLY, CHARACTER BY CHARACTER!
- Don't overthink this challenge; it's not supposed to be hard.
---

## 💻 Solution

```javascript
function circuitPower(v,c) {
    return v*c;
}

console.log(circuitPower(230, 10))   // 2300
console.log(circuitPower(110, 3))  // 330
console.log(circuitPower(480, 20))  // 9600