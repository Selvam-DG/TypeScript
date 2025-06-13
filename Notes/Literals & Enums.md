#  Literals & Enums

TypeScript provides **literal types** and **enums** to help define exact values and named sets of constants. These are useful for modeling specific constraints and improving code clarity.

---

##  Literal Types

Literal types represent **exact values**, not just general types.

```ts
// String literal
let direction: "up" | "down" = "up";

// Number literal
let retryCount: 0 | 1 | 2 = 1;

// Boolean literal
let isProduction: true = true;
```

### Use Cases

- To constrain variables to a set of exact values
- Common with union types and function parameters

```ts
type Status = "success" | "error" | "loading";

function showStatus(status: Status) {
  console.log(`Status is: ${status}`);
}
```

---

## Enums

Enums let you define a set of **named constants**. They come in two types:

### 1. Numeric Enums

```ts

enum Direction {
  Up = 1,
  Down,
  Left,
  Right
}

let move: Direction = Direction.Left; // 3
```

> If no value is provided, numeric enums auto-increment from 0 (or the previous value).

---

### 2. String Enums

```ts

enum Status {
  Success = "SUCCESS",
  Error = "ERROR",
  Loading = "LOADING"
}

let currentStatus: Status = Status.Success;
```

> String enums are more readable and safer for debugging and logs.

---

### 3. Const Enums (for performance)

```ts

const enum Color {
  Red,
  Green,
  Blue
}

let c: Color = Color.Green;
```

> Const enums are inlined at compile time and **do not exist** in the output JavaScript.

---

## 🧾 Summary Table

| Feature | Description | Example |
|--------|-------------|---------|
| Literal Types | Restrict values to specific literals | `"on" \| "off"` |
| Numeric Enum | Auto-incremented constants | `enum Size { Small = 1, Medium, Large }` |
| String Enum | Human-readable constants | `enum Mode { Auto = "AUTO" }` |
| Const Enum | Compile-time only enums | `const enum Direction { Up, Down }` |
|------  |------- | ------ |


---

## 📌 Notes

- **Literals** are great for union types and precise control over values.
- **Enums** provide clarity when values represent named states or categories.
- Prefer **string enums** in most applications for readability.
- Use **const enums** for performance-critical scenarios, especially in large apps.

> ✅ Literal types and enums are powerful tools to make your TypeScript code safer, more expressive, and more maintainable.
