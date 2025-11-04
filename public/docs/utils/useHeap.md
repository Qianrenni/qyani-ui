# UseHeap 堆数据结构工具

通用堆数据结构封装类，支持最小堆/最大堆，可作为优先队列使用。

## 概述

`UseHeap` 是一个基于数组实现的二叉堆数据结构，支持自定义比较函数以适应不同类型的元素和排序需求。默认情况下，它是一个最小堆，适用于数字和字符串类型。

## 构造函数

```ts
constructor(compare: (a: T, b: T) => boolean = (a, b) => a < b as unknown as boolean)
```

### 参数

| 参数名   | 类型                            | 默认值                  | 说明                                       |
|----------|---------------------------------|-------------------------|--------------------------------------------|
| compare  | `(a: T, b: T) => boolean`       | `(a, b) => a < b`       | 比较函数，定义元素优先级。返回 true 表示 a 优先级高于 b |

> ⚠️ 注意：默认比较函数仅适用于 number/string 类型，在生产环境中建议显式传入比较函数以避免运行时错误。

## 属性

### size

```ts
public get size(): number
```

获取堆中元素的数量。

## 静态方法

### heaplify

```ts
static heaplify<T>(arr: T[], compare: (a: T, b: T) => boolean): void
```

将数组原地堆化（构建堆结构）。

#### 参数

| 参数名   | 类型                      | 说明         |
|----------|---------------------------|--------------|
| arr      | `T[]`                     | 待堆化的数组 |
| compare  | `(a: T, b: T) => boolean` | 比较函数     |

### heapPop

```ts
static heapPop<T>(arr: T[], compare: (a: T, b: T) => boolean): T | undefined
```

弹出堆顶元素（优先级最高元素）。

#### 参数

| 参数名   | 类型                      | 说明         |
|----------|---------------------------|--------------|
| arr      | `T[]`                     | 堆数组       |
| compare  | `(a: T, b: T) => boolean` | 比较函数     |

#### 返回值

堆顶元素，若堆为空则返回 undefined。

### heapPush

```ts
static heapPush<T>(arr: T[], item: T, compare: (a: T, b: T) => boolean): void
```

向堆中插入一个新元素。

#### 参数

| 参数名   | 类型                      | 说明         |
|----------|---------------------------|--------------|
| arr      | `T[]`                     | 堆数组       |
| item     | `T`                       | 要插入的元素 |
| compare  | `(a: T, b: T) => boolean` | 比较函数     |

### heapSort

```ts
static heapSort<T>(arr: T[], compare: (a: T, b: T) => boolean = (a, b) => a < b): void
```

堆排序：原地排序数组。

> ⚠️ 注意：堆排序使用的比较函数应与堆性质一致。
> 例如：若构建最小堆（a < b），则排序后为升序；
>       若构建最大堆（a > b），则排序后为降序。

#### 参数

| 参数名   | 类型                      | 默认值              | 说明                                         |
|----------|---------------------------|---------------------|----------------------------------------------|
| arr      | `T[]`                     | -                   | 待排序数组                                   |
| compare  | `(a: T, b: T) => boolean` | `(a, b) => a < b`   | 比较函数（默认为最小堆：a < b → 升序）       |

## 实例方法

### add

```ts
public add(item: T): void
```

添加元素到堆中。

#### 参数

| 参数名   | 类型  | 说明         |
|----------|-------|--------------|
| item     | `T`   | 要添加的元素 |

### pop

```ts
public pop(): T | undefined
```

弹出堆顶元素（优先级最高）。

#### 返回值

堆顶元素，若堆为空则返回 undefined。

### sort

```ts
public sort(): void
```

对内部数组进行堆排序。

> ⚠️ 排序后堆结构被破坏，不可继续作为堆使用。
> 排序后数组按 compare 定义的优先级逆序排列：
> - 若 compare(a,b) = a < b（最小堆），排序后为升序
> - 若 compare(a,b) = a > b（最大堆），排序后为降序

### clear

```ts
public clear(): void
```

清空堆。

### peek

```ts
public peek(): T | undefined
```

查看堆顶元素（不弹出）。

#### 返回值

堆顶元素，若堆为空则返回 undefined。

### isEmpty

```ts
public isEmpty(): boolean
```

判断堆是否为空。

#### 返回值

如果堆为空返回 true，否则返回 false。

### toArray

```ts
public toArray(): T[]
```

获取堆内所有元素的副本（不影响堆结构）。

#### 返回值

包含堆中所有元素的数组副本。

## 使用示例

```ts
// 创建一个最小堆（默认）
const minHeap = new UseHeap<number>();

// 添加元素
minHeap.add(5);
minHeap.add(2);
minHeap.add(8);
minHeap.add(1);

console.log(minHeap.peek()); // 1
console.log(minHeap.pop());  // 1
console.log(minHeap.size);   // 3

// 创建一个最大堆
const maxHeap = new UseHeap<number>((a, b) => a > b);

maxHeap.add(5);
maxHeap.add(2);
maxHeap.add(8);
maxHeap.add(1);

console.log(maxHeap.peek()); // 8

// 使用自定义对象和比较函数
interface Person {
  name: string;
  age: number;
}

const personHeap = new UseHeap<Person>((a, b) => a.age < b.age); // 按年龄最小堆

personHeap.add({ name: "Alice", age: 30 });
personHeap.add({ name: "Bob", age: 25 });
personHeap.add({ name: "Charlie", age: 35 });

console.log(personHeap.pop()); // { name: "Bob", age: 25 }

// 使用静态方法直接操作数组
const arr = [3, 1, 4, 1, 5, 9, 2, 6];
UseHeap.heaplify(arr, (a, b) => a < b);
console.log(arr); // 堆化后的数组

const max = UseHeap.heapPop(arr, (a, b) => a < b);
console.log(max); // 1
console.log(arr); // 移除最小元素后的数组

// 堆排序
const sortableArr = [3, 1, 4, 1, 5, 9, 2, 6];
UseHeap.heapSort(sortableArr);
console.log(sortableArr); // [1, 1, 2, 3, 4, 5, 6, 9]
```

## 注意事项

1. 默认比较函数仅适用于 number 和 string 类型，对于其他类型必须提供自定义比较函数
2. 使用 [sort](file:///d:/project/qyani-ui-docs/node_modules/.pnpm/@vue+runtime-core@3.5.18/node_modules/@vue/runtime-core/dist/runtime-core.d.ts#L2251-L2251) 方法后，堆结构会被破坏，不能再作为堆使用
3. 堆的比较函数在整个堆生命周期中应该保持一致
4. 静态方法可以直接操作数组而无需创建 UseHeap 实例