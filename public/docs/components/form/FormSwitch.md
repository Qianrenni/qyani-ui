# Props 参数

| 参数         | 类型                                                          | 默认值         | 必填 | 说明        |
|------------|-------------------------------------------------------------|-------------|----|-----------|
| `modelValue` | `boolean`                                                   | `false`     | 否  | 开关的选中状态 |
| `label`     | `string`                                                   | `''`        | 否  | 标签文字      |
| `disabled`  | `boolean`                                                   | `false`     | 否  | 是否禁用开关    |
| `name`      | `string`                                                   | `''`        | 否  | 原生 name 属性 |
| `direction` | `'horizontal' \| 'vertical'`                                | `'horizontal'` | 否  | 标签排列方向   |
| `size`      | `'small' \| 'middle' \| 'large'`                            | `'middle'`  | 否  | 开关尺寸      |
| `id`        | `string`                                                   | `undefined` | 否  | 原生 id 属性  |

---

# Events 事件

| 事件名      | 回调参数 | 说明        |
|----------|------|-----------|
| `update:modelValue`  | `boolean`    | 状态变化时触发，返回新的开关状态 |

---

# Slots 插槽

无插槽定义。

---

# Expose 方法

无 expose 方法定义。