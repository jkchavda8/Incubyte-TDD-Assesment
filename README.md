# String Calculator – TDD Kata (Incubyte Assessment)

This repository implements a **String Calculator** using **Test-Driven Development (TDD)** methodology. This kata is part of the **Incubyte TDD Assessment**, inspired by Roy Osherove's classic TDD exercise.

---

## ✨ Features

- Add numbers provided as comma- or newline-separated strings.
- Support for:
  - Custom single-character delimiters (e.g. `//;\n1;2`)
  - Custom multi-character delimiters (e.g. `//[***]\n1***2***3`)
  - Multiple custom delimiters (e.g. `//[***][+++]\n1***2+++3`)
- Error thrown for:
  - Negative numbers (all listed)
  - Invalid tokens (e.g. `abc`)
  - Empty delimiters (e.g. `//[]`)
- Skips empty tokens and treats them as `0`.
- Fully tested using **Jest**.

---

## 🚀 Getting Started

### Clone the repository, install dependencies, and run tests

```bash
git clone https://github.com/jkchavda8/Incubyte-TDD-Assesment.git
cd Incubyte-TDD-Assesment
npm install
npm test
```
---

### 🧪 Technologies Used

- **Node.js** (runtime)
- **JavaScript** (ES6+)
- **Jest** (unit testing framework)

---

### 👤 Author

**Jay Chavda**
