<script lang="ts" setup>
import DemoBlock from "@/DemoBlock.vue";
import { UseLocalStorage,type TypeGuard } from "qyani-components";

// 定义类型守卫函数（示例：检查是否为字符串）
const isString: TypeGuard<string> = (value: any): value is string => typeof value === 'string';

// 创建带前缀的本地存储实例
const storage = new UseLocalStorage<string>('demo_', isString);

// 示例操作
storage.setItem('testKey', 'hello world', 60000); // 存储字符串，有效期60秒
const value = storage.getItem('testKey');
const hasItem = storage.hasItem('testKey');
const keys = storage.getKeys();

const code = `
\`\`\`typescript
// 定义类型守卫
const isString: TypeGuard<string> = (value: any): value is string => typeof value === 'string';

// 创建带前缀的存储实例
const storage = new UseLocalStorage<string>('demo_', isString);

// 设置值（带过期时间）
storage.setItem('testKey', 'hello world', 60000);

// 获取值
const value = storage.getItem('testKey');

// 判断是否存在
const hasItem = storage.hasItem('testKey');

// 获取所有键
const keys = storage.getKeys();
\`\`\`
`;
</script>

<template>
  <DemoBlock :code="code">
    <div class="container-align-center container-column margin-vetical gap">
      <p>Value: {{ value }}</p>
      <p>Has Item: {{ hasItem }}</p>
      <p>Keys: {{ keys.join(', ') }}</p>
    </div>
  </DemoBlock>
</template>

<style scoped>
.margin-vetical {
  margin-top: 16px;
  margin-bottom: 16px;
}
.container-column {
  flex-direction: column;
}
.container-align-center {
  align-items: center;
}
.container-center {
  display: flex;
  justify-content: center;
}
.gap {
  gap: 16px;
}
</style>