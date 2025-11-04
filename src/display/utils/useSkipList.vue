<script lang="ts" setup>
import DemoBlock from "@/DemoBlock.vue";
// 示例使用 QSkipList 的代码
const code = `
\`\`\`ts
// 创建一个跳表实例，存储字符串类型数据
const skipList = new QSkipList<string>();

// 插入元素（分数, 成员）
skipList.insert(1.5, 'apple');
skipList.insert(2.3, 'banana');
skipList.insert(1.0, 'orange');

// 查询排名为 1 的元素
console.log(skipList.get_by_rank(1)); // [1.5, 'apple']

// 获取 banana 的排名
console.log(skipList.get_rank(2.3, 'banana')); // 2

// 获取第一个和最后一个元素
console.log(skipList.get_first()); // [1.0, 'orange']
console.log(skipList.get_last());  // [2.3, 'banana']

// 获取从第 0 个位置开始的 3 个元素
console.log(skipList.range(0, 3));
// [['orange', 1.0], ['apple', 1.5], ['banana', 2.3]]

// 反向获取最后两个元素
console.log(skipList.reverse_range(0, 2));
// [['banana', 2.3], ['apple', 1.5]]

// 删除一个元素
skipList.delete(1.5, 'apple');

// 检查长度
console.log(skipList.length); // 2
\`\`\`
`;
</script>

<template>
  <DemoBlock :code="code">
    <div class="container-align-center container-column margin-vetical gap">
      <p>跳表示例已加载，功能包括插入、删除、按排名查询、范围获取等。</p>
      <p>具体用法请查看代码示例。</p>
    </div>
  </DemoBlock>
</template>

<style scoped>
.margin-vetical {
  margin: 20px 0;
}
.gap {
  gap: 16px;
}
.container-align-center {
  align-items: center;
}
.container-column {
  flex-direction: column;
}
.container-center {
  display: flex;
  justify-content: center;
}
</style>