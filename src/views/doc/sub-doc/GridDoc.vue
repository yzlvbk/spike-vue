<template>
  <div>
    <Demo
      title="三栏 / 六栏布局"
      description="mobile是默认的布局配置参数。"
      :component="GridDemo1" />

    <Demo
      title="设置间隙 / 空隙"
      description="gutter属性设置分栏间隙，配置参数键值比例设置分栏间空隙。"
      :component="GridDemo2" />

    <Demo
      title="响应式布局"
      description="同时设置多个配置参数，实现响应式布局。"
      :component="GridDemo3" />

    <Attr
      :columns="attrColumns"
      :data="attrData" />

  </div>
</template>

<script>
import Demo from '../../../components/Demo.vue'
import Attr from '../../../components/Attr.vue'
import Event from '../../../components/Event.vue'
import GridDemo1 from '../../../demo-code/grid-demo/GridDemo1.vue'
import GridDemo2 from '../../../demo-code/grid-demo/GridDemo2.vue'
import GridDemo3 from '../../../demo-code/grid-demo/GridDemo3.vue'
import { attrColumns, eventColumns } from '../../../utils/cloumn-config'
import {
  ref
} from 'vue';
export default {
  components: {
    Demo,
    Attr,
    Event
  },

  setup() {
    const attrData = [
      {
        params: 'gutter',
        desc: '	栅格的间隙，单位为 px',
        type: 'String , Number',
        select: '——',
        default: '——',
      },
      {
        params: 'mobile,ipad,npc,pc,wpc',
        desc: '	不同屏幕宽度下分栏所占宽度的配置参数，键对应分栏所占宽度，值对应分栏前空隙宽度。mobile-first，ipad、npc、pc、wpc对应 min-width 分别为 577px、769px、993px、1201px',
        type: 'Object',
        select: '——',
        default: '——',
      }
    ]

    return {
      GridDemo1,
      GridDemo2,
      GridDemo3,
      attrData,
      attrColumns,
      eventColumns
    }
  }
}
</script>
