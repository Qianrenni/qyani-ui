# useDebounce 函数

防抖函数，用于限制函数的执行频率，只有在停止调用一段时间后才会执行。

## 简介

防抖（Debounce）是一种常用的性能优化技术，它确保函数在一段时间内只执行一次。当函数被频繁调用时（如输入框输入、窗口调整大小等），防抖可以确保只有在停止调用一段时间后才执行实际的函数逻辑。

## 函数签名

```typescript
export const useDebounce = <T extends (...args: any[]) => any>(
    func: T,
    delay: number
): (...args: Parameters<T>) => void => {
    // ...
}
```

## 参数

| 参数 | 类型 | 必填 | 说明 |
|------|------|------|------|
| func | `T extends (...args: any[]) => any` | 是 | 需要防抖的函数 |
| delay | `number` | 是 | 延迟时间（毫秒） |

## 返回值

`(...args: Parameters<T>) => void` - 返回一个防抖后的函数

## 使用示例

### 基础用法

```typescript
import { useDebounce } from 'qyani-components'

const count = ref(0)
// 创建一个防抖函数，延迟500ms执行
const debounceAdd = useDebounce(() => {
  count.value += 1
}, 500)

// 多次快速调用 debounceAdd，只会执行最后一次
debounceAdd()
debounceAdd()
debounceAdd()
// 500ms后 count 值增加1
```

### 在输入框中使用

```typescript
import { ref } from 'vue'
import { useDebounce } from 'qyani-components'

const searchKeyword = ref('')
const searchResults = ref([])

// 创建防抖搜索函数
const debouncedSearch = useDebounce(async (keyword: string) => {
  // 执行搜索请求
  const results = await fetchSearchResults(keyword)
  searchResults.value = results
}, 300)

// 监听输入变化
const handleInput = (e: Event) => {
  const value = (e.target as HTMLInputElement).value
  searchKeyword.value = value
  // 每次输入都会调用防抖函数，但只有停止输入300ms后才会真正执行搜索
  debouncedSearch(value)
}
```

### 在窗口大小调整中使用

```typescript
import { ref } from 'vue'
import { useDebounce } from 'qyani-components'

const windowWidth = ref(window.innerWidth)

// 创建防抖的窗口大小调整处理函数
const debouncedResizeHandler = useDebounce(() => {
  windowWidth.value = window.innerWidth
  // 执行其他与窗口大小相关的操作
}, 200)

// 添加事件监听器
window.addEventListener('resize', debouncedResizeHandler)
```

## 工作原理

1. 当防抖函数被调用时，会先清除之前设置的定时器
2. 然后设置一个新的定时器，在指定的延迟时间后执行原函数
3. 如果在延迟时间内再次调用防抖函数，之前的定时器会被清除，重新设置新的定时器
4. 只有在最后一次调用后经过完整的延迟时间，原函数才会被执行

## 应用场景

- 输入框搜索：避免用户每输入一个字符就发送一次请求
- 窗口大小调整：避免频繁触发 resize 事件处理函数
- 按钮点击：防止用户重复点击造成重复提交
- 滚动事件：优化滚动处理函数的执行频率

## 注意事项

1. 防抖函数每次调用都会创建一个新的闭包，注意内存泄漏问题
2. 如果需要在组件销毁时清理定时器，可以结合 `onUnmounted` 生命周期钩子
3. 防抖适用于"只关心最终结果"的场景，如果需要"每个事件都要响应"，应使用节流（throttle）