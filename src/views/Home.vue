<template>
    <div class="page">
        <div class="obj_menuBtn">
            <ul class="leftMenu">
                <li class="obj_Apibtn1"></li>
                <li class="obj_Apibtn2"></li>
                <li class="obj_Apibtn3"></li>
                <li class="obj_Apibtn4"></li>
            </ul>
        </div>
        <div>
          <router-view/>
          <!-- <div class="apiBox">請輸入資料</div> -->
        </div>
    </div>
</template>

<script>
export default {
    name:"Home",
    data(){
        return{
            tableData: []
        }
    },
    
}
</script>

<style>

</style>