# UseLocalStorage 类

```typescript
class UseLocalStorage<T>
```

## 构造函数

```typescript
constructor(prefix: string = '', typeGuard?: TypeGuard<T>)
```

- **参数**
  - `prefix: string` - 存储键前缀，默认为空字符串
  - `typeGuard: TypeGuard<T>` - 类型守卫函数，用于校验存储值的类型（可选）

---

## 方法

### `setItem`

设置存储项（支持过期时间）

```typescript
setItem(key: string, value: T, expires?: number): void
```

- **参数**
  - `key: string` - 存储键
  - `value: T` - 存储值
  - `expires: number` - 过期时间（毫秒），可选。若传入，则在指定时间后自动失效

- **行为**
  - 若存在 `typeGuard` 且校验失败，抛出错误
  - 自动添加前缀保存至 `localStorage`
  - 包含 `value` 和 `expires` 时间戳的封装结构

---

### `getItem`

获取存储项，若不存在、已过期或类型不合法则返回 `null`

```typescript
getItem(key: string): T | null
```

- **参数**
  - `key: string` - 存储键（原始键名，无需加前缀）

- **返回值**
  - `T | null` - 成功时返回原值；否则返回 `null`，并自动清理无效数据

- **检查逻辑**
  1. 键是否存在
  2. JSON 解析是否有效
  3. 数据结构是否完整（包含 `value` 字段）
  4. 是否已过期
  5. 是否通过 `typeGuard` 类型校验

---

### `removeItem`

删除指定存储项

```typescript
removeItem(key: string): void
```

- **参数**
  - `key: string` - 存储键

---

### `clear`

清空所有带有当前前缀的存储项

```typescript
clear(): void
```

- **行为**
  - 遍历 `localStorage`，移除所有以 `prefix` 开头的键

---

### `hasItem`

判断指定键是否存在且未过期、类型合法

```typescript
hasItem(key: string): boolean
```

- **参数**
  - `key: string` - 存储键

- **返回值**
  - `boolean` - 存在且有效返回 `true`，否则 `false`

> ✅ 复用 `getItem` 逻辑进行完整校验

---

### `getKeys`

获取所有带前缀的有效键名（去除前缀后的原始键名数组）

```typescript
getKeys(): string[]
```

- **返回值**
  - `string[]` - 所有匹配前缀的原始键名数组

> ⚠️ 不包含已过期或损坏的数据

---

### `getStorageKey` （私有方法）

生成带前缀的实际存储键

```typescript
private getStorageKey(key: string): string
```

- **参数**
  - `key: string` - 原始键名

- **返回值**
  - `string` - 实际在 `localStorage` 中使用的键名：`${prefix}${key}`

---

## 类型定义

### `StorageItem<T>`

```typescript
interface StorageItem<T> {
  value: T;
  expires?: number; // 过期时间戳（毫秒）
}
```

- 表示存储在 `localStorage` 中的结构化数据项

---

### `TypeGuard<T>`

```typescript
type TypeGuard<T> = (value: any) => value is T;
```

- 类型谓词函数，用于运行时类型检查
- 示例：
  ```ts
  const isUser = (val: any): val is User => 
    typeof val === 'object' && 'name' in val && 'id' in val;
  ```

---

## 使用示例

```ts
const storage = new UseLocalStorage<User>('user_', isUser);

storage.setItem('profile', { id: 1, name: 'Alice' }, 3600000); // 1小时后过期

const user = storage.getItem('profile'); // 返回 User | null

storage.hasItem('profile'); // true / false

storage.getKeys(); // ['profile']

storage.clear();
```

---

## 特性总结

| 能力 | 说明 |
|------|------|
| ✅ 类型安全 | 支持泛型 + `typeGuard` 校验 |
| ✅ 自动过期 | 支持设置毫秒级过期时间 |
| ✅ 前缀隔离 | 多实例之间互不干扰 |
| ✅ 异常防护 | 捕获解析错误、结构异常并自动清理 |
| ✅ 无依赖 | 纯 TypeScript 实现，无需外部库 |

> 💡 推荐为每个业务模块创建独立的 `UseLocalStorage` 实例以保证命名空间隔离