<template>
  <div class="api_temp">
    <el-form label-width="8rem" data-width="20rem" data-space="space-wertical">
      <el-form-item label="ID">
        <el-input v-model="postObj.id" type="text" />
      </el-form-item>
      <el-form-item label="Name">
        <el-input v-model="postObj.name" type="text" />
      </el-form-item>
      <el-form-item label="Class">
        <el-input v-model="postObj.class" type="text" />
      </el-form-item>
      <el-form-item label="Date">
          <el-date-picker v-model="postObj.date" type="datetime" value-format="yyyy-MM-dd HH:mm"></el-date-picker>
      </el-form-item>
      <div class="row horizontal v_center end">
          <el-button @click="packagePostData">Add Data(POST)</el-button>
      </div>
    </el-form>
    <el-table :data="tableData" style="width:100%; overflow: hidden;" height="76vh">
      <el-table-column prop="id" label="ID" align="center" width="100" />
      <el-table-column prop="name" label="Name" />
      <el-table-column prop="date" label="Date" />
      <el-table-column label="Action" align="center" width="120">
          <template slot-scope="scope">
              <el-button @click="delData(scope.row.id)">DELETE</el-button>
          </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "apiTemp",
  data() {
    return {
      tableData: [],
      pickTime: '',
      postObj:{
          id: '',
          name: '',
          class: '',
          date: '',
      }

    };
  },

  created() {
    this.packageGetData();
  },

  methods: {
    async packageGetData() {
      const source = "http://localhost:3000/tableData";
      let res = await this.$api.get(source);
      this.tableData = [...res];
      console.log(res);
    },
    async packagePostData() {
        const source = "http://localhost:3000/tableData";
        await this.$api.post(source, this.postObj)
        this.packageGetData()
        console.log(source.data)
    },
    async delData(id) {
        const source = 'http://localhost:3000/tableData/' + `${id}`
        await this.$api.delete(source)
        this.packageGetData()
        console.log(this.tableData)
    }
  }
};
</script>

<style>
</style>