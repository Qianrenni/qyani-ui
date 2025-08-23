<template>
  <DemoBlock :code="code">
    <div class="container margin-vetical container-w100">
      <QTree
          :data="treeData"
          @nodeClick="(node:TreeNodeData) => console.log(node)"
          class="tree-contaienr container-w100"
      />
    </div>
  </DemoBlock>
</template>

<script lang="ts" setup>
import {QTree} from "qyani-components";
import  { type TreeNodeData} from 'qyani-components'
import DemoBlock from "@/DemoBlock.vue";

const treeData: TreeNodeData[] = [
  {
    id: 1,
    label: '根节点 1',
    expanded: true,
    children: [
      {
        id: 2,
        label: '子节点 1-1',
        children: [
          {
            id: 3,
            label: '子节点 1-1-1'
          },
          {
            id: 4,
            label: '子节点 1-1-2',
            disabled: true
          }
        ]
      },
      {
        id: 5,
        label: '子节点 1-2'
      }
    ]
  },
  {
    id: 6,
    label: '根节点 2',
    children: [
      {
        id: 7,
        label: '子节点 2-1'
      },
      {
        id: 8,
        label: '子节点 2-2',
        expanded: true,
        children: [
          {
            id: 9,
            label: '子节点 2-2-1'
          },
          {
            id: 10,
            label: '子节点 2-2-2'
          }
        ]
      }
    ]
  },
  {
    id: 11,
    label: '根节点 3 (无子节点)'
  }
]
const code =`
\`\`\`html
<div class="container margin-vetical container-w100">
  <QTree
      :data="treeData"
      @nodeClick="(node:TreeNodeData) => console.log(node)"
      class="tree-contaienr container-w100"
  />
</div>
\`\`\`
`+`
\`\`\`ts
import {QTree} from "qyani-components";
import  { type TreeNodeData} from 'qyani-components'
import DemoBlock from "@/DemoBlock.vue";

const treeData: TreeNodeData[] = [
  {
    id: 1,
    label: '根节点 1',
    expanded: true,
    children: [
      {
        id: 2,
        label: '子节点 1-1',
        children: [
          {
            id: 3,
            label: '子节点 1-1-1'
          },
          {
            id: 4,
            label: '子节点 1-1-2',
            disabled: true
          }
        ]
      },
      {
        id: 5,
        label: '子节点 1-2'
      }
    ]
  },
  {
    id: 6,
    label: '根节点 2',
    children: [
      {
        id: 7,
        label: '子节点 2-1'
      },
      {
        id: 8,
        label: '子节点 2-2',
        expanded: true,
        children: [
          {
            id: 9,
            label: '子节点 2-2-1'
          },
          {
            id: 10,
            label: '子节点 2-2-2'
          }
        ]
      }
    ]
  },
  {
    id: 11,
    label: '根节点 3 (无子节点)'
  }
]
\`\`\`
`
</script>

<style scoped>
.tree-contaienr {
  width: 100%;
  background-color: var(--card-bg);
  border: 1px solid var(--border-color);
  border-radius: 0.5rem;
  padding: var(--half-distance);
}
</style>