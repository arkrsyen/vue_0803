<template>
  <el-button @click="$router.go(-1)">Go Back</el-button>
  <br>
  <div class="row vertical" data-space="space-vertical">
    <b>{{ endding }}</b><br>
    <div v-if="flag == 'a'"></div>
    <div v-if="flag == 'b'"></div>
    <div v-if="flag == 'c'"></div>
    <div v-if="flag == 'd'"></div>
  </div>
</template>
<script>
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
export default {
  name: "VuexTemp",
  data() {
    return {
      total: 0,
      flag: "",
      endding: ""
    };
  },
  computed: {
    ...mapGetters(["mapGetTotal", "mapGetFlag", "mapGetEpilogue"])
  },
  created() {
    this.mapGetTotal;
    this.total = this.$store.temp.total;
    this.flag = this.$store.temp.flag;
    this.endding = this.$store.temp.epilogue;
    console.log(`total: `, this.total);
    console.log("flag:", this.flag);
  }
};
</script>