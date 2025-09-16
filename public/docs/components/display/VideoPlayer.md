# Props 参数

| 参数         | 类型      | 默认值    | 必填 | 说明                   |
|------------|---------|--------|----|----------------------|
| `source`   | `string`  | `''`   | 否  | 视频资源的 URL 地址         |
| `autoPlay` | `boolean` | `true` | 否  | 是否自动播放视频            |
| `controls` | `boolean` | `true` | 否  | 是否显示视频控件（播放、暂停等） |
| `muted`    | `boolean` | `false`| 否  | 是否静音播放视频            |

> 💡 提示：支持原生 `video` 的所有属性（如 `autoplay`, `muted`, `controls` 等）

---

# Events 事件

| 事件名      | 回调参数 | 说明             |
|----------|------|------------------|
| `play`   | —    | 当视频开始播放时触发       |
| `pause`  | —    | 当视频暂停时触发         |
| `ended`  | —    | 当视频播放结束时触发       |
| `error`  | —    | 当视频加载或播放发生错误时触发 |

---

# Slots 插槽

| 插槽名       | 说明         | 示例 |
|-----------|------------|-----|
| `default` | 默认内容插槽，用于插入自定义内容 | -   |

---

# Expose 方法

| 方法名       | 参数 | 返回值      | 说明             |
|-----------|----|----------|------------------|
| `play`    | —  | `Promise` | 播放视频的方法          |
| `pause`   | —  | —         | 暂停视频的方法          |
| `seekTo`  | `time: number` | —         | 跳转到指定时间点播放视频的方法 |

---

# Methods 方法

| 方法名       | 参数           | 返回值      | 说明                 |
|-----------|--------------|----------|----------------------|
| `play`    | —            | `Promise` | 调用原生 `video.play()` |
| `pause`   | —            | —         | 调用原生 `video.pause()` |
| `seekTo`  | `time: number` | —         | 设置 `video.currentTime = time` |

---

# 类型定义

```ts
interface VideoPlayerProps {
  source?: string
  autoPlay?: boolean
  controls?: boolean
  muted?: boolean
}
```