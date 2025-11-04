# API 文档

## `useScreenSize` 模块

### 方法

#### `getWidth(width: number): Ref<boolean>`

根据指定宽度判断当前窗口宽度是否小于等于给定值，返回响应式布尔值。

- **参数**：
  - `width: number` — 用于比较的宽度阈值。
- **返回值**：
  - `Ref<boolean>` — 响应式布尔值，表示 `window.innerWidth <= width` 是否成立。
- **说明**：
  - 利用内部 `Map` 缓存已创建的响应式变量，避免重复计算。
  - 自动监听 `useWindowResize` 的窗口变化事件并更新响应式值。

#### `getHeight(height: number): Ref<boolean>`

根据指定高度判断当前窗口高度是否小于等于给定值，返回响应式布尔值。

- **参数**：
  - `height: number` — 用于比较的高度阈值。
- **返回值**：
  - `Ref<boolean>` — 响应式布尔值，表示 `window.innerHeight <= height` 是否成立。
- **说明**：
  - 同样使用 `Map` 缓存机制，确保相同条件下的响应式对象唯一。
  - 监听窗口高度变化并自动更新结果。

---

### 内部机制

- 使用 `hashMap: Map<string, Ref<boolean>>` 缓存已生成的响应式条件变量，键名为 `width-${width}` 或 `height-${height}`。
- 依赖外部模块 `useWindowResize` 提供的 `addHandler` 方法进行事件监听，实现响应式更新。