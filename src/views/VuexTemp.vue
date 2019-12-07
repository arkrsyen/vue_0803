<template>
<div>
  <p>作戰時間</p>
  <el-radio-group v-model="flagItem.selectA" @change="onRadioChange">
        <el-radio-button
          v-for="(item, index) in flagItem.partA"
          :key="index"
          :label="item.label"
        >{{ item.name }}</el-radio-button>
      </el-radio-group>
      <br />
      <br />
      <p>要用那個屬性</p>
      <br />
      <el-radio-group v-model="flagItem.selectB" @change="onRadioChange">
        <el-radio-button
          v-for="(item, index) in flagItem.partB"
          :key="index"
          :label="item.label"
        >{{ item.name }}</el-radio-button>
      </el-radio-group>
      <br />
      <br />
      <br />
      <p>哪一種攻擊手段？</p>
      <br />
      <el-radio-group v-model="flagItem.selectC" @change="onRadioChange">
        <el-radio-button
          v-for="(item, index) in flagItem.partC"
          :key="index"
          :label="item.label"
        >{{ item.name }}</el-radio-button>
      </el-radio-group>
    <br />
    <br />
    <el-button @click="$router.push({name: 'VuexDetail'})">結果へ</el-button>
</div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
export default {
  name: "VuexTemp",
  data() {
    return {
      flagItem: {
        selectA: "",
        selectB: "",
        selectC: "",
        partA: [
          { label: 0, name: "早上" },
          { label: 1, name: "中午" },
          { label: 2, name: "晚上" }
        ],

        partB: [
          { label: 1, name: "地" },
          { label: 8, name: "火" },
          { label: 14, name: "土" },
          { label: 26, name: "風" },
          { label: 38, name: "水" }
        ],

        partC: [
          { label: 20, name: "普攻" },
          { label: 40, name: "遠程" },
          { label: 60, name: "特攻" },
          { label: 80, name: "拳頭" },
          { label: 100, name: "魔法" }
        ]
      }
    };
  },
  computed: {
    ...mapGetters(["mapGetTotal"]),
    getTotalScore() {
      let result =
        this.flagItem.selectA + this.flagItem.selectB + this.flagItem.selectC;
      return result;
    }
  },
  methods: {
    ...mapActions(["setFlag"]),
    ...mapMutations(["changeTotal", "changeFlag", "changeEpilogue"]),
    onRadioChange() {
      this.changeTotal(this.getTotalScore);
      this.setFlag();
      this.changeEpilogue();
    }
  },
  created() {
    this.mapGetTotal;
    this.mapGetFlag;
    this.mepGetEpilogue;
  }
};
</script>