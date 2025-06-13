# 📦 TypeScript Arrays & Tuples

TypeScript extends JavaScript's array capabilities with static typing and introduces **tuples**, which allow fixed-length arrays with known types at each index.

## 📚 Arrays

Arrays can hold multiple values of the **same type**.

```ts

// Array of numbers
let scores: number[] = [90, 85, 100];

// Array of strings
let fruits: string[] = ["apple", "banana", "cherry"];

// Array using generic syntax
let flags: Array<boolean> = [true, false, true];

// Array of objects
type User = { id: number; name: string };
let users: User[] = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" }
];

// Multidimensional array
let matrix: number[][] = [
  [1, 2],
  [3, 4]
];
```

> Tip: Prefer `type[]` syntax for readability.

---

## 🎯 Tuples

Tuples are arrays with a **fixed length** and **known types** for each element.

```ts

// A tuple with [string, number]
let user: [string, number] = ["Alice", 30];

// Tuple with more elements
let record: [number, string, boolean] = [1, "done", true];

// Optional elements
let optionalTuple: [string, number?] = ["optional"];

// Tuple with rest elements
let flexible: [string, ...number[]] = ["scores", 80, 90, 100];
```

> Tuples are especially useful for returning multiple values from functions with known order and types.

---

## 🧾 Summary Table

| Feature | Description | Example |
|--------|-------------|---------|
| `T[]` | Array of type `T` | `let list: number[] = [1, 2]` |
| `Array<T>` | Generic array type | `let names: Array<string>` |
| `[T1, T2]` | Tuple with fixed types | `let entry: [string, number]` |
| Optional in tuple | Make last element optional | `[string, number?]` |
| Rest in tuple | Allow variable-length after fixed | `[string, ...number[]]` |

---

## 📌 Notes

- Arrays are best for lists of items of the **same type**.
- Tuples are best when order and **type at each position** matters.
- TypeScript's static typing prevents accessing out-of-bound indices in tuples.

> ✅ You can mix both arrays and tuples to model complex data structures cleanly.
