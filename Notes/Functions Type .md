# Function Types

TypeScript allows you to annotate **function signatures**, improving safety and clarity. Function types can be as simple or complex as needed.

---

##  Basic Function Types

### Function Declaration with Type Annotations

```ts
function greet(name: string): string {
  return `Hello, ${name}`;
}
```

### Function Expression with Type

```ts
const add: (a: number, b: number) => number = (a, b) => a + b;
```

### Optional Parameters

```ts
function log(message: string, level?: string): void {
  console.log(`[${level || "INFO"}]: ${message}`);
}
```

### Default Parameters

```ts
function multiply(a: number, b: number = 2): number {
  return a * b;
}
```

### Rest Parameters

```ts
function sum(...nums: number[]): number {
  return nums.reduce((a, b) => a + b, 0);
}
```

---

## 🔸 Advanced Function Types

### Function Type Aliases

```ts
type MathOp = (x: number, y: number) => number;

const subtract: MathOp = (a, b) => a - b;
```

### Callable Interfaces

```ts
interface Formatter {
  (input: string): string;
}

const upperCase: Formatter = str => str.toUpperCase();
```

### Functions as Parameters

```ts
function process(input: string, formatter: (str: string) => string): string {
  return formatter(input);
}

process("hello", s => s.toUpperCase());
```

### Function Overloads

```ts
function combine(a: string, b: string): string;
function combine(a: number, b: number): number;
function combine(a: any, b: any): any {
  return a + b;
}

const result1 = combine("a", "b"); // string
const result2 = combine(1, 2);     // number
```

### `this` Parameter in Functions

```ts
interface User {
  name: string;
  greet(this: User): string;
}

const user: User = {
  name: "Alice",
  greet() {
    return `Hi, I'm ${this.name}`;
  }
};
```

>  Note: `this` in functions must be annotated if used.

---

##  Summary Table

| Feature                 | Example                                  |
|-------------------------|------------------------------------------|
| Basic Function          | `(a: number, b: number) => number`       |
| Optional/Default Params | `param?: string`, `param = "default"`   |
| Rest Params             | `(...args: string[]) => void`            |
| Type Alias              | `type Fn = (x: number) => string`        |
| Callable Interface      | `interface Fn { (x: number): void }`     |
| Function Overloads      | Multiple signatures for one function     |
| `this` in functions     | `function(this: Type)`                   |

---

##  Notes

- Use **type aliases** or **interfaces** for reusable function shapes.
- Prefer **function overloads** when you need multiple input/output combos.
- Avoid using `any` in function arguments or returns—be explicit!

- TypeScript’s function types let you model real-world logic cleanly, safely, and with high precision.
