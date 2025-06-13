# TypeScript Primitive Types

TypeScript provides a set of **primitive types** that represent the most basic building blocks of a program. These are immutable and represent single values.

## List of Primitive Types

```ts

// 1. string
let username: string = "Alice"; // explicit data type
let username = "bob"; // implicit data type i.e, ts automatically assign data type

// 2. number
let age: number = 25;
let price: number = 99.99;

// 3. boolean
let isActive: boolean = true;

// 4. bigint
let largeNumber: bigint = 123456789012345678901234567890n;
// Note: bigint requires ES2020 or newer

// 5. symbol
let uniqueId: symbol = Symbol("id");

// 6. null
let nothingHere: null = null;

// 7. undefined
let notAssigned: undefined = undefined;

// 8. void
function logMessage(): void {
  console.log("This returns nothing");
}

// 9. never
function throwError(): never {
  throw new Error("Something went wrong");
}
```

## 🧾 Summary Table

| Type        | Description                              |
|-------------|------------------------------------------|
| `string`    | Textual data                             |
| `number`    | Numbers (integer or float)               |
| `boolean`   | `true` or `false`                        |
| `bigint`    | Large integers                           |
| `symbol`    | Unique identifiers                       |
| `null`      | No value                                 |
| `undefined` | Value not assigned                       |
| `void`      | No return value                          |
| `never`     | Function never returns a value           |

## 📌 Notes

- All these types are part of the JavaScript language, and TypeScript adds static typing to them.
- TypeScript helps catch type-related bugs at compile time, improving code quality and maintainability.



