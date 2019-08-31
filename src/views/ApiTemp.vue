<template>
    <div class="page api_temp">text!!</div>
</template>

<script>
export default {
    name:"apiTemp",
    data(){
        return{
            tableData: []
        }
    },
    
    created(){
        this.packageGetData()
    },
    
    methods:{
        async packageGetData() {
        const source = 'http://localhost:3000/tableData'
        let res = await this.$api.get(source)
        this.tableData = [...res]
        console.log(res)
        }
    }
}
</script>

<style>

</style>