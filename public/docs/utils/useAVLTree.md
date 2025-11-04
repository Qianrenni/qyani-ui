# UseAVLTree 类

自平衡二叉搜索树（AVL Tree）实现，支持自定义比较函数和重复值处理。

## 简介

AVL 树是一种自平衡的二叉搜索树，其中任何节点的两个子树的高度差最多为 1。这种平衡保证了树的操作（如查找、插入和删除）在 O(log n) 时间复杂度内完成。

UseAVLTree 支持以下特性：
- 自动平衡：插入和删除操作后自动维护树的平衡
- 重复值支持：通过内部计数器优化存储重复元素
- 自定义比较：支持自定义比较函数以适应不同数据类型
- 节点池优化：通过节点复用减少内存分配开销

## 构造函数

```typescript
constructor(compare?: (a: T, b: T) => number, POOL_SIZE = 16)
```

### 参数

| 参数 | 类型 | 必填 | 默认值 | 说明 |
|------|------|------|--------|------|
| compare | `(a: T, b: T) => number` | 否 | 基于 number/string 的默认比较函数 | 自定义比较函数：<br>- 返回负数表示 a < b<br>- 返回 0 表示 a === b<br>- 返回正数表示 a > b |
| POOL_SIZE | `number` | 否 | 16 | 节点池大小，用于节点复用优化 |

### 使用示例

```typescript
// 默认比较函数（仅适用于 number/string）
const tree1 = new UseAVLTree<number>();

// 自定义比较函数
const tree2 = new UseAVLTree<{id: number, name: string}>(
  (a, b) => a.id - b.id
);

// 自定义节点池大小
const tree3 = new UseAVLTree<string>(undefined, 32);
```

## 属性

### size

```typescript
public get size(): number
```

获取树中元素的总数（包括重复元素）。

#### 返回值

`number` - 树中元素的总数

## 方法

### insert

```typescript
public insert(value: T): void
```

插入值到树中。如果值已存在，则增加其计数器而不是创建新节点。

#### 参数

| 参数 | 类型 | 必填 | 说明 |
|------|------|------|------|
| value | `T` | 是 | 要插入的值 |

#### 使用示例

```typescript
const tree = new UseAVLTree<number>();
tree.insert(5);
tree.insert(3);
tree.insert(7);
tree.insert(3); // 增加 3 的计数而不是创建新节点
```

### delete

```typescript
public delete(value: T): boolean
```

从树中删除值。如果值存在且计数大于 1，则减少计数；否则删除节点。

#### 参数

| 参数 | 类型 | 必填 | 说明 |
|------|------|------|------|
| value | `T` | 是 | 要删除的值 |

#### 返回值

`boolean` - 删除成功返回 true，否则返回 false

#### 使用示例

```typescript
const tree = new UseAVLTree<number>();
tree.insert(5);
tree.insert(3);
tree.insert(3); // 3 的计数为 2

console.log(tree.delete(3)); // true，3 的计数减为 1
console.log(tree.delete(3)); // true，删除节点 3
console.log(tree.delete(3)); // false，3 不在树中
```

### find

```typescript
public find(value: T): AVLNode<T> | null
```

查找指定值的节点。

#### 参数

| 参数 | 类型 | 必填 | 说明 |
|------|------|------|------|
| value | `T` | 是 | 要查找的值 |

#### 返回值

`AVLNode<T> | null` - 找到返回节点，否则返回 null

### has

```typescript
public has(value: T): boolean
```

检查树中是否包含指定值。

#### 参数

| 参数 | 类型 | 必填 | 说明 |
|------|------|------|------|
| value | `T` | 是 | 要检查的值 |

#### 返回值

`boolean` - 存在返回 true，否则返回 false

### min

```typescript
public min(): T | undefined
```

获取树中的最小值。

#### 返回值

`T | undefined` - 最小值，树为空时返回 undefined

### max

```typescript
public max(): T | undefined
```

获取树中的最大值。

#### 返回值

`T | undefined` - 最大值，树为空时返回 undefined

### inOrder

```typescript
public inOrder(callback: (value: T, count: number) => void): void
```

中序遍历树（升序访问元素）。

#### 参数

| 参数 | 类型 | 必填 | 说明 |
|------|------|------|------|
| callback | `(value: T, count: number) => void` | 是 | 遍历时调用的回调函数，参数为值和重复计数 |

#### 使用示例

```typescript
const tree = new UseAVLTree<number>();
tree.insert(5);
tree.insert(3);
tree.insert(3); // 3 的计数为 2
tree.insert(7);

tree.inOrder((value, count) => {
  console.log(`${value} (${count} times)`);
});
// 输出:
// 3 (2 times)
// 5 (1 times)
// 7 (1 times)
```

### toArray

```typescript
public toArray(): T[]
```

将树转换为数组（升序，重复值会展开）。

#### 返回值

`T[]` - 包含所有元素的升序数组

#### 使用示例

```typescript
const tree = new UseAVLTree<number>();
tree.insert(5);
tree.insert(3);
tree.insert(3);
tree.insert(7);

console.log(tree.toArray()); // [3, 3, 5, 7]
```

### clear

```typescript
public clear(): void
```

清空树中的所有元素。

### isEmpty

```typescript
public isEmpty(): boolean
```

检查树是否为空。

#### 返回值

`boolean` - 为空返回 true，否则返回 false

## AVLNode 类

AVL 树节点类。

### 属性

| 属性 | 类型 | 说明 |
|------|------|------|
| value | `T` | 节点存储的值 |
| left | `AVLNode<T> | null` | 左子节点 |
| right | `AVLNode<T> | null` | 右子节点 |
| height | `number` | 节点高度（叶子节点高度为 1） |
| count | `number` | 重复元素计数 |

## 使用示例

```typescript
// 创建一个数字 AVL 树
const numberTree = new UseAVLTree<number>();

// 插入元素
numberTree.insert(10);
numberTree.insert(5);
numberTree.insert(15);
numberTree.insert(3);
numberTree.insert(7);
numberTree.insert(5); // 重复值

// 检查元素
console.log(numberTree.has(5)); // true
console.log(numberTree.size); // 6 (5 出现两次)

// 遍历元素
numberTree.inOrder((value, count) => {
  console.log(`Value: ${value}, Count: ${count}`);
});

// 转换为数组
console.log(numberTree.toArray()); // [3, 5, 5, 7, 10, 15]

// 查找最值
console.log(numberTree.min()); // 3
console.log(numberTree.max()); // 15

// 删除元素
numberTree.delete(5); // 计数减1
console.log(numberTree.has(5)); // true
numberTree.delete(5); // 删除节点
console.log(numberTree.has(5)); // false

// 创建一个对象 AVL 树
interface Person {
  id: number;
  name: string;
}

const personTree = new UseAVLTree<Person>(
  (a, b) => a.id - b.id
);

personTree.insert({id: 3, name: "Alice"});
personTree.insert({id: 1, name: "Bob"});
personTree.insert({id: 2, name: "Charlie"});

console.log(personTree.min()); // {id: 1, name: "Bob"}
console.log(personTree.toArray()); 
// [{id: 1, name: "Bob"}, {id: 2, name: "Charlie"}, {id: 3, name: "Alice"}]
```

## 复杂度分析

| 操作 | 时间复杂度 | 说明 |
|------|------------|------|
| insert | O(log n) | 插入元素并保持平衡 |
| delete | O(log n) | 删除元素并保持平衡 |
| find | O(log n) | 查找元素 |
| min/max | O(log n) | 查找最值 |
| inOrder | O(n) | 遍历所有元素 |
| toArray | O(n) | 转换为数组 |

## 注意事项

1. 默认比较函数仅适用于 number 和 string 类型，其他类型需要提供自定义比较函数
2. 重复值通过计数器优化存储，不会创建重复节点
3. 节点池机制用于减少频繁的内存分配和回收
4. AVL 树始终保持平衡，确保操作的时间复杂度为 O(log n)