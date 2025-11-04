# `UseLRUCache<T>` 类文档

## 类概述
LRU（最近最少使用）缓存实现类，基于 `localStorage` 持久化存储。通过两个独立的键分别管理缓存数据和访问顺序，超出容量时自动淘汰最久未使用的条目。

---

## 构造函数

```ts
constructor(name: string, typeGuard: TypeGuard<T>, maxSize = 8)
```

| 参数       | 类型             | 默认值 | 必填 | 说明 |
|----------|------------------|------|----|----|
| `name`     | `string`         | —    | 是  | 缓存实例名称，用于区分不同的缓存 |
| `typeGuard` | `(value: any) => value is T` | —    | 是  | 类型谓词函数，用于校验从 localStorage 恢复的数据类型 |
| `maxSize`   | `number`         | `8`  | 否  | 最大缓存容量，最小为 1 |

> 📌 实例创建时会尝试从 `localStorage` 中恢复数据，并进行类型检查。若类型不匹配则清空缓存并报错。

---

## 成员方法

### `get(key: string): T | null`
获取指定键的缓存值，并更新其访问顺序。

- **参数**：
  - `key: string` — 键名
- **返回值**：`T | null` — 对应值或 `null`（不存在）

---

### `set(key: string, value: T): void`
设置缓存值，更新访问顺序，必要时触发淘汰策略。

- **参数**：
  - `key: string` — 键名
  - `value: T` — 值
- **行为**：
  - 插入/更新数据
  - 移动键至访问顺序末尾
  - 若超过 `maxSize`，移除最久未使用的项
  - 同步保存到 `localStorage`

---

### `remove(key: string): void`
删除指定键的缓存条目。

- **参数**：
  - `key: string` — 要删除的键
- **行为**：
  - 若存在，则从数据和顺序中移除
  - 更新 `localStorage`

---

### `clear(): void`
清空所有缓存数据。

- **行为**：
  - 重置内存中的 `data` 和 `order`
  - 删除对应的 `localStorage` 条目

---

### `has(key: string): boolean`
判断缓存是否包含某键。

- **参数**：
  - `key: string` — 键名
- **返回值**：`boolean` — 是否存在

---

### `size(): number`
获取当前缓存中的项目数量。

- **返回值**：`number`

---

### `capacity(): number`
获取缓存最大容量。

- **返回值**：`number`

---

### `getName(): string`
获取缓存实例名称。

- **返回值**：`string`

---

### `keys(): string[]`
获取所有键的数组，按访问时间从早到晚排序（最久 → 最近）。

- **返回值**：`string[]` — 键名列表副本

---

### `getLatestKey(): string | null`
获取最近访问的键。

- **返回值**：`string | null`

---

### `getLatestValue(): T | null`
获取最近访问的值。

- **返回值**：`T | null`

---

### `getRecent(count?: number): Array<{ key: string; value: T }>`
获取最近使用的若干条记录（按时间倒序：最新在前）。

- **参数**：
  - `count: number` — 获取数量，默认等于 `maxSize`
- **返回值**：`Array<{ key: string; value: T }>` — 包含键值对的数组，按“最近使用”排序

---

## 内部方法（私有）

以下方法仅供内部使用，不对外暴露。

| 方法名             | 参数 | 返回值 | 说明 |
|------------------|----|-----|----|
| `loadFromStorage<U>(key)` | `string` | `U \| null` | 从 localStorage 安全读取并解析 JSON |
| `saveToStorage(key, value)` | `string`, `unknown` | `void` | 将值序列化后写入 localStorage |
| `updateOrder(key)`        | `string` | `void` | 将键移到访问顺序末尾 |
| `evictIfFull()`           | —      | `void` | 若超容，删除最久未使用的项 |

---

## Expose 方法

> ❌ 本类未使用 `defineExpose`，无对外暴露的组合式 API 方法。

---

## 类型定义

### `StorageData<T>`
```ts
interface StorageData<T> {
    [key: string]: T;
}
```
键值对结构，用于存储缓存数据。

---

### `TypeGuard<T>`
```ts
type TypeGuard<T> = (value: any) => value is T;
```
类型谓词，用于运行时类型校验。

---

## 存储机制

- 数据存储键：`__LRUCacheData__${name}`
- 访问顺序键：`__LRUCacheOrder__${name}`
- 使用 `JSON.stringify` / `JSON.parse` 序列化与反序列化
- 所有操作均同步持久化至 `localStorage`

---

## 注意事项

- 类型安全依赖传入的 `typeGuard`，请确保其实现正确。
- 浏览器环境需支持 `localStorage`。
- 大量频繁写入可能影响性能。
- 单个域名下 `localStorage` 容量有限（通常约 5–10MB），注意整体占用。