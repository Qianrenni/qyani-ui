# useFollowSystemTheme 函数

## 参数

无

## 返回值

| 属性名   | 类型       | 说明                     |
|--------|----------|--------------------------|
| `isDark` | `Ref<boolean>` | 响应式：是否为深色模式         |
| `stop`   | `() => void`  | 可手动停止监听系统主题变化的函数 |

## 函数说明

`useFollowSystemTheme` 函数用于监听系统主题变化，并自动为 `body` 元素添加或移除 `dark-mode` 类。该函数返回一个包含 `isDark` 和 `stop` 的对象。

- `isDark`：一个响应式引用，表示当前是否为深色模式。
- `stop`：用于手动停止监听系统主题变化的函数。

## Expose 方法

无

## 示例

```ts
import { useFollowSystemTheme } from '@/composables/useFollowSystemTheme';

export default {
  setup() {
    const { isDark, stop } = useFollowSystemTheme();

    return {
      isDark,
      stop,
    };
  },
};
```