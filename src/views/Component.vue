<template>
  <div>
    <tabs :durationDisplay="true" @tabDuration="tabDuration"></tabs>

    <tabs :onSaleDisplay="true" @tabOnSale="tabOnSale"></tabs>

    <ve-line
      v-if="currentTab == 0"
      :data="betSuccess"
      :loading="true"
      :settings="lineChartConfig"
      :lagend-visible="false"
      :colors="lineChartColor.blue"
    />
  </div>
</template>

<script>
import tabs from "../views/tabs";
export default {
  components: {
    tabs
  },

  data() {
    this.lineChartConfig = {
      area: true
    };
    return {
      currentTab: "",
      lineChartColor: {
        blue: ["#bcb5ff"],
        orange: ["#a5a552"],
        green: ["#ffe153"]
      },
      betSuccess: {
        columns: ["日期", "有效投注"],
        rows: [
          { 日期: "08/27", 有效投注: "5100000" },
          { 日期: "08/29", 有效投注: "2200000" },
          { 日期: "09/10", 有效投注: "6090000" },
          { 日期: "09/20", 有效投注: "5540000" },
          { 日期: "10/10", 有效投注: "3500000" },
          { 日期: "10/20", 有效投注: "913000" },
          { 日期: "10/30", 有效投注: "700000" },
          { 日期: "11/10", 有效投注: "740000" },
          { 日期: "11/20", 有效投注: "850000" },
          { 日期: "11/27", 有效投注: "9990000" }
        ]
      }
    };
  },
  methods: {
    tabDuration(val) {
      this.currentTab = val;
      console.log("duration type:", val);
    },
    tabOnSale(val) {
      this.currentTab = val;
      console.log("onSale type:", val);
    }
  }
};
</script>