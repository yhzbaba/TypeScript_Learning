```typescript
move(distance:number = 0){
  //...
}
```

像这里是默认参数

方法与属性不声明的话默认是 public

protected

readonly

参数属性不要动，可读性会差

get set 方法

```typescript
get fullName(): string {
    return this._fullName;
  }
  set fullName(newName: string) {
    if (password && password === "secret password") {
      this._fullName = newName;
    } else {
      console.log("Error: Unauthorized update of employee!");
    }
  }
```

存取器

```typescript
class Employee2 {
  private _fullName: string;
  get fullName(): string {
    return this._fullName;
  }
  set fullName(newName: string) {
    if (password && password === "secret password") {
      this._fullName = newName;
    } else {
      console.log("Error: Unauthorized update of employee!");
    }
  }
}

let yhz = new Employee2();
yhz.fullName = "hahah";
if (yhz.fullName) {
  console.log(yhz.fullName);
}
```

抽象类。。这里肯定会了
