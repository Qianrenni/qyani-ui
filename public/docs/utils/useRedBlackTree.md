# 类型定义

```ts
enum Color {
    RED = 'RED',
    BLACK = 'BLACK'
}
```

| 枚举值 | 说明 |
|-------|------|
| `RED` | 红色节点 |
| `BLACK` | 黑色节点 |

---

```ts
type Comparator<T> = (a: T, b: T) => number;
```

比较函数类型，返回值：
- 负数：`a < b`
- 0：`a === b`
- 正数：`a > b`

---

# 类：RBTreeNode

红黑树节点类。

## 属性

| 属性 | 类型 | 说明 |
|------|------|------|
| `value` | `T` | 节点存储的值 |
| `color` | `Color` | 节点颜色（红/黑） |
| `left` | `RBTreeNode<T>` | 左子节点 |
| `right` | `RBTreeNode<T>` | 右子节点 |
| `parent` | `RBTreeNode<T>` | 父节点 |
| `count` | `number` | 当前值的重复次数 |

## 方法

### `isNil`

**类型**：`get isNil(): boolean`  
判断是否为哨兵节点（NIL）。

### `increment()`

增加重复计数。

### `decrement()`

**返回值**：`boolean`  
减少重复计数；若减至 0 则返回 `true`（需物理删除），否则返回 `false`。

---

# 类：UseRedBlackTree

支持重复值的红黑树实现，具备自动平衡特性，操作时间复杂度为 O(log n)。

## 构造函数

```ts
constructor(comparator?: Comparator<T>, poolSize: number = 16)
```

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `comparator` | `Comparator<T>` | `defaultComparator` | 自定义比较函数 |
| `poolSize` | `number` | `16` | 节点对象池大小，用于性能优化 |

---

## 方法

### `insert(value: T): number`

插入一个值。若已存在则 `count++`，不创建新节点。

- **参数**：
  - `value: T` — 待插入值
- **返回值**：
  - `0`：值已存在，仅增加计数
  - `1`：新增节点
- **副作用**：
  - 更新 `totalCount` 和 `nodeCount`
  - 触发 `insertFixup` 维护红黑树性质

---

### `delete(value: T): boolean`

删除一个值实例（`count--`），若 `count` 降为 0 则物理删除节点。

- **参数**：
  - `value: T` — 待删除值
- **返回值**：
  - `true`：删除成功
  - `false`：值不存在
- **副作用**：
  - 更新 `totalCount` 和 `nodeCount`
  - 若需物理删除，调用 `deleteNode` 并触发 `deleteFixup`

---

### `contains(value: T): boolean`

检查树中是否包含指定值。

- **参数**：`value: T`
- **返回值**：是否存在该值

---

### `getCount(value: T): number`

获取某值的出现次数。

- **参数**：`value: T`
- **返回值**：该值当前的 `count`，不存在则返回 `0`

---

### `getNodeCount(): number`

获取不同值的节点数量（即去重后的节点数）。

- **返回值**：`this.nodeCount`

---

### `getTotalCount(): number`

获取所有值的总数（含重复项）。

- **返回值**：`this.totalCount`

---

### `isEmpty(): boolean`

判断树是否为空（无任何节点）。

- **返回值**：`nodeCount === 0`

---

### `inorderTraversal(callback: (value: T) => void): void`

中序遍历整棵树，按顺序输出每个值（重复值根据 `count` 输出多次）。

- **参数**：`callback` — 每个值被访问时执行的函数

---

### `toArray(): T[]`

将树中所有值转为有序数组（重复值重复出现）。

- **返回值**：排序后的值数组

---

### `clear(): void`

清空整棵树，重置根节点和计数器。

---

### `validate(): boolean`

验证红黑树性质是否满足（调试用途）。

- **返回值**：
  - `true`：通过验证
  - `false`：违反红黑树性质，并打印错误信息

---

## 内部方法（私有）

以下方法仅供内部使用，不对外暴露。

### `createNode(value: T, count?: number): RBTreeNode<T>`

从对象池或直接构造创建新节点，关联 `NIL` 哨兵。

### `recycleNode(node: RBTreeNode<T>): void`

回收节点至对象池以复用内存。

### `rotateLeft(x: RBTreeNode<T>): void`

左旋操作，维护树结构平衡。

### `rotateRight(y: RBTreeNode<T>): void`

右旋操作，维护树结构平衡。

### `insertFixup(node: RBTreeNode<T>): void`

插入后修复红黑树性质（处理双红问题）。

### `deleteNode(node: RBTreeNode<T>): void`

物理删除节点，包括替换、移植与修复。

### `transplant(u: RBTreeNode<T>, v: RBTreeNode<T>): void`

将子树 `v` 替换到 `u` 的位置。

### `minimum(node: RBTreeNode<T>): RBTreeNode<T>`

查找以 `node` 为根的子树中的最小节点（最左节点）。

### `deleteFixup(node: RBTreeNode<T>): void`

删除后修复黑高平衡（处理双黑问题）。

### `inorderTraversalHelper(...)`

递归辅助函数，执行中序遍历。

### `validateHelper(node: RBTreeNode<T>): number`

递归验证黑高一致性及无连续红节点。

---

# 导出成员

```ts
export { UseRedBlackTree, RBTreeNode, Color, Comparator };
```

| 成员 | 类型 | 说明 |
|------|------|------|
| `UseRedBlackTree` | class | 主红黑树容器类 |
| `RBTreeNode` | class | 红黑树节点类 |
| `Color` | enum | 节点颜色枚举 |
| `Comparator` | type | 比较函数签名 |

---

> 💡 提示：此实现支持泛型 `T`，可适用于数字、字符串等可比较类型，默认使用 `<` 和 `===` 进行比较。通过自定义 `comparator` 可扩展至任意类型。