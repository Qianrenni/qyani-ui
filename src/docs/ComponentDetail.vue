
<!-- src/docs/ComponentDetail.vue -->
<script lang="ts" setup>
import {defineOptions, ref, watch} from 'vue'
import {QMarkdownRender, QTab} from "qyani-components";
import type {ComponentInfo} from "@/utils/useComponentInfo.ts";
import Icon from '../display/components/basic/Icon.vue'
import Message from '../display/components/basic/Message.vue'
import Pagination from '../display/components/basic/Pagination.vue'
import Avatar from '../display/components/display/Avatar.vue'
import Badge from '../display/components/display/Badge.vue'
import Carousel from '../display/components/display/Carousel.vue'
import CarouselItem from '../display/components/display/CarouselItem.vue'
import Divider from '../display/components/display/Divider.vue'
import LazyImage from '../display/components/display/LazyImage.vue'
import MarkdownRender from '../display/components/display/MarkdownRender.vue'
import MobileFrame from '../display/components/display/MobileFrame.vue'
import ProgressBar from '../display/components/display/ProgressBar.vue'
import RainFigure from '../display/components/display/RainFigure.vue'
import ScrollNotice from '../display/components/display/ScrollNotice.vue'
import VideoPlayer from '../display/components/display/VideoPlayer.vue'
import VirtualList from '../display/components/display/VirtualList.vue'
import FormButton from '../display/components/form/FormButton.vue'
import FormCheckboxGroup from '../display/components/form/FormCheckboxGroup.vue'
import FormColorPicker from '../display/components/form/FormColorPicker.vue'
import FormContainer from '../display/components/form/FormContainer.vue'
import FormDatalist from '../display/components/form/FormDatalist.vue'
import FormDatePicker from '../display/components/form/FormDatePicker.vue'
import FormFileUpload from '../display/components/form/FormFileUpload.vue'
import FormRadioGroup from '../display/components/form/FormRadioGroup.vue'
import FormRangeSlider from '../display/components/form/FormRangeSlider.vue'
import FormSelect from '../display/components/form/FormSelect.vue'
import FormSwitch from '../display/components/form/FormSwitch.vue'
import FormTable from '../display/components/form/FormTable.vue'
import FormText from '../display/components/form/FormText.vue'
import FormTextarea from '../display/components/form/FormTextarea.vue'
import Search from '../display/components/form/Search.vue'
import Card from '../display/components/layout/Card.vue'
import Collapse from '../display/components/layout/Collapse.vue'
import CollapseItem from '../display/components/layout/CollapseItem.vue'
import CollapsibleSection from '../display/components/layout/CollapsibleSection.vue'
import Dialog from '../display/components/layout/Dialog.vue'
import Drawer from '../display/components/layout/Drawer.vue'
import PopContainer from '../display/components/layout/PopContainer.vue'
import ScrollContainer from '../display/components/layout/ScrollContainer.vue'
import SwiperAction from '../display/components/layout/SwiperAction.vue'
import Tree from '../display/components/layout/Tree.vue'
import TreeNode from '../display/components/layout/TreeNode.vue'
import Loading from '../display/components/loading/Loading.vue'
import Breathing from '../display/components/loading/animations/Breathing.vue'
import Skeleton from '../display/components/loading/animations/Skeleton.vue'
import Spinner from '../display/components/loading/animations/Spinner.vue'
import NavSection from '../display/components/navigation/NavSection.vue'
import Tab from '../display/components/navigation/Tab.vue'
import ConditionSelect from '../display/components/Sql/ConditionSelect.vue'
import ThemeToggle from '../display/components/theme/ThemeToggle.vue'
import useDrag from '../display/events/useDrag.vue'
import useFormEvents from '../display/events/useFormEvents.vue'
import useMousePosition from '../display/events/useMousePosition.vue'
import useAVLTree from '../display/utils/useAVLTree.vue'
import useDebounce from '../display/utils/useDebounce.vue'
import useFollowSystemTheme from '../display/utils/useFollowSystemTheme.vue'
import useHeap from '../display/utils/useHeap.vue'
import useLocalStorage from '../display/utils/useLocalStorage.vue'
import useLRUCache from '../display/utils/useLRUCache.vue'
import useMemoryCache from '../display/utils/useMemoryCache.vue'
import useMessage from '../display/utils/useMessage.vue'
import useRedBlackTree from '../display/utils/useRedBlackTree.vue'
import useScreenSize from '../display/utils/useScreenSize.vue'
import useSegmentTree from '../display/utils/useSegmentTree.vue'
import useShowLoading from '../display/utils/useShowLoading.vue'
import useSkipList from '../display/utils/useSkipList.vue'
import useThrottle from '../display/utils/useThrottle.vue'
import useTime from '../display/utils/useTime.vue'
import useTimeDisplay from '../display/utils/useTimeDisplay.vue'
import useWindowResize from '../display/utils/useWindowResize.vue'
const componentMap ={
	'Icon':Icon,
	'Message':Message,
	'Pagination':Pagination,
	'Avatar':Avatar,
	'Badge':Badge,
	'Carousel':Carousel,
	'CarouselItem':CarouselItem,
	'Divider':Divider,
	'LazyImage':LazyImage,
	'MarkdownRender':MarkdownRender,
	'MobileFrame':MobileFrame,
	'ProgressBar':ProgressBar,
	'RainFigure':RainFigure,
	'ScrollNotice':ScrollNotice,
	'VideoPlayer':VideoPlayer,
	'VirtualList':VirtualList,
	'FormButton':FormButton,
	'FormCheckboxGroup':FormCheckboxGroup,
	'FormColorPicker':FormColorPicker,
	'FormContainer':FormContainer,
	'FormDatalist':FormDatalist,
	'FormDatePicker':FormDatePicker,
	'FormFileUpload':FormFileUpload,
	'FormRadioGroup':FormRadioGroup,
	'FormRangeSlider':FormRangeSlider,
	'FormSelect':FormSelect,
	'FormSwitch':FormSwitch,
	'FormTable':FormTable,
	'FormText':FormText,
	'FormTextarea':FormTextarea,
	'Search':Search,
	'Card':Card,
	'Collapse':Collapse,
	'CollapseItem':CollapseItem,
	'CollapsibleSection':CollapsibleSection,
	'Dialog':Dialog,
	'Drawer':Drawer,
	'PopContainer':PopContainer,
	'ScrollContainer':ScrollContainer,
	'SwiperAction':SwiperAction,
	'Tree':Tree,
	'TreeNode':TreeNode,
	'Loading':Loading,
	'Breathing':Breathing,
	'Skeleton':Skeleton,
	'Spinner':Spinner,
	'NavSection':NavSection,
	'Tab':Tab,
	'ConditionSelect':ConditionSelect,
	'ThemeToggle':ThemeToggle,
	'useDrag':useDrag,
	'useFormEvents':useFormEvents,
	'useMousePosition':useMousePosition,
	'useAVLTree':useAVLTree,
	'useDebounce':useDebounce,
	'useFollowSystemTheme':useFollowSystemTheme,
	'useHeap':useHeap,
	'useLocalStorage':useLocalStorage,
	'useLRUCache':useLRUCache,
	'useMemoryCache':useMemoryCache,
	'useMessage':useMessage,
	'useRedBlackTree':useRedBlackTree,
	'useScreenSize':useScreenSize,
	'useSegmentTree':useSegmentTree,
	'useShowLoading':useShowLoading,
	'useSkipList':useSkipList,
	'useThrottle':useThrottle,
	'useTime':useTime,
	'useTimeDisplay':useTimeDisplay,
	'useWindowResize':useWindowResize
}

defineOptions({
  name: 'ComponentDetail'
})
const props = defineProps<{
  component: ComponentInfo | null
}>()
const currentTabIndex = ref<number>(0);
const currentCotent = ref('')
watch(
    () => props.component,
    async (newComponent: ComponentInfo | null) => {
        if (newComponent) {
            currentCotent.value = await (await fetch(newComponent.docPath)).text();
        }
    }
)
</script>

<template>
  <div v-if="!component" class="placeholder bg-card component-detail">
    请选择一个组件
  </div>

  <div v-else class=" bg-card component-detail container-column scroll-container scroll-y">
    <div class="container-column padding-rem container-flex-1">
      <!-- 右侧标题 -->
      <h2 class="text-primary text-center padding-half-rem margin-half-vetical border-horizontal-gray">
        {{ component.displayName }} 组件
      </h2>
      <QTab :list="['文档说明', '组件展示']" @select="(index:number)=>currentTabIndex=index"/>
      <!-- 组件展示区 -->
      <div v-show="currentTabIndex===0" class="component-display padding-rem radius-half-rem shadow-black">
        <!-- Markdown 文档 -->
        <QMarkdownRender :content="currentCotent"/>
      </div>
      <component :is="componentMap[props.component?.name as keyof typeof componentMap]" v-show="currentTabIndex===1"/>
    </div>
  </div>
</template>

<style scoped>
.component-detail {
  flex: 1;
  overflow-y: auto;
  height: calc(100vh - 32px);
}

.component-display {
  transition: all 0.5s ease;
}


.placeholder {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: #666;
  font-size: 1.2em;
}

/* 添加进入和离开动画 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
