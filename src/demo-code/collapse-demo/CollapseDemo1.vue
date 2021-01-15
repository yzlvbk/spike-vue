<demo>
</demo>
<template>
  <div>
    <s-collapse v-model:selected="selected">
      <s-collapse-item name="social">
        <template v-slot:title>社会资讯</template>
        经过税务机关3个多月的依法调查核实，群众举报范冰冰“阴阳合同”涉税问题有了明确结果。税务机关依法向范冰冰作出追缴税款、滞纳金并处以罚款的决定。社会各界特别是文艺影视工作者坚决支持税务部门依法查处此案，并从中得到教育警示。值得注意的是，依据《中华人民共和国刑法》第二百零一条的规定，属于首次被税务机关按偷税予以行政处罚且此前未因逃避缴纳税款受过刑事处罚，上述定性为偷税的税款、滞纳金、罚款在规定期限内缴纳后，依法不予追究刑事责任。
      </s-collapse-item>

      <s-collapse-item name="finance">
        <template v-slot:title>财经新闻</template>
        港万得通讯社报道，周二美国三大股指涨跌不一，道指收涨逾120点，创收盘历史新高，英特尔大涨3.6%。中概股普遍下跌拖累纳指收低，蔚来汽车收跌10.3%，迅雷收跌9.7%，搜狐收跌8.2%。投资者仍在关注意大利预算案引发的恐慌以及国际贸易局势的进展。
      </s-collapse-item>

      <s-collapse-item name="sicence">
        <template v-slot:title>科技新闻</template>
        海外网10月3日电 当地时间10月3日，瑞典皇家科学院宣布，将2018年诺贝尔化学奖授予2018年诺贝尔化学奖得主为Arnold，Smith，Winter。根据诺贝尔奖官方网站介绍，诺贝尔化学奖由瑞典皇家科学院负责颁发，始于1901年，以表彰“在化学领域做出最重要发现或发明的人”。化学是诺贝尔奖创始人阿尔弗雷德·诺贝尔一生中最依赖的科学，他的发明和积累的巨额财富都得益于化学知识。1895年，诺贝尔立下遗嘱，从个人财富中拿出3100万瑞典克朗作为基金，设立诺贝尔奖，用以奖励在几大科学领域中做出重要贡献的人。遗嘱中，他把化学奖放在了第二位，仅次于物理学奖。
      </s-collapse-item>

      <s-collapse-item name="sports">
        <template v-slot:title>体育新闻</template>
        北京时间10月4日凌晨0点55分，欧冠小组赛第2轮，巴黎圣日耳曼坐镇主场迎战贝尔格莱德红星。上半场内马尔梅开二度，卡瓦尼和迪马利亚各进一球；下半场比赛内马尔助攻姆巴佩破门，并自己再入一球完成帽子戏法，最终巴黎6-1大胜贝尔格莱德红星。
      </s-collapse-item>

    </s-collapse>
  </div>
</template>

<script lang="ts">
import { sCollapse, sCollapseItem } from "spike-vue"
import { ref } from "vue";
export default {
  components: {
    sCollapse,
    sCollapseItem
  },
  setup() {
    const selected = ref([])

    return { selected }
  }
}
</script>
