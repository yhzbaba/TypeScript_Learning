# 基础类型

布尔值

```typescript
let isDone: boolean = true;
let isUnDone: boolean = false;
```

数字

```typescript
let decLiteral: number = 20;
let hexLiteral: number = 0x14;
let binaryLiteral: number = 0b10100;
let octalLiteral: number = 0o24;
```

字符串

```typescript
let name1: string = "bob";
let name2: string = `Hello ${name1}`;
```

数组

```typescript
let list1: Array<number> = [1, 2, 3];
let list2: number[] = [1, 2, 3];
```

元组

```typescript
let touple1: [string, number] = ["hello", 10];
```

枚举

```typescript
enum Color {
  Red = 1,
  Green = 2,
  Blue = 3
}
let c: Color = Color.Blue;
```

any

```typescript
//不进行类型检查
let notSure: any = 4;
let list: any[] = [1, true, "free"];
```

void

```typescript
//不返回任何值
function warnUser(): void {
  console.log("hahahaha");
}
```

null & undefined;
never

````typescript
//永远无法执行完这个函数，就是never
function infiniteLoo(): never {
  while (true) {}
}
function error(message: string): never {
  throw new Error(message);
}
function fail() {
  return error("something failed!");
}

object;
```typescript
declare function create(o: object | null): void;
create({ prop: 0 });
create(null);
````

类型断言

```typescript
//as语法
let stringLength: number = (someValue as string).length;
```
