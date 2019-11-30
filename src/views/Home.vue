<template>
    <div class="page">
        <div class="header">
            <span class="logoTitle">BIAU`s VUE NOTE</span>
        </div>
        <div class="obj_menuBtn">
            <ul class="leftMenu">
                <li class="obj_Apibtn1"></li>
                <li class="obj_Apibtn2"></li>
                <li class="obj_Apibtn3"></li>
                <li class="obj_Apibtn4"></li>
            </ul>
        </div>
        <router-view />
    </div>
        <!-- <div class="main home">
    <div class="side">
      <div class="logo">Fate/Admin Order</div>
      <nav>
        <label>Home</label>
        <ul>
          <li @click="$router.push({name: 'Dashboard'})">Dashboard</li>
          <li @click="$router.push({name: 'Dashboard'})">Component</li>
          <li @click="$router.push({name: 'DataEvent'})">Data Event</li>
          <li @click="$router.push({name: 'Pickup'})">Pickup</li>
          <li @click="$router.push({name: 'Dashboard'})">圖表</li>
          <li @click="$router.push({name: 'API'})">API</li>
          <li @click="$router.push({name: 'LocalStorange'})">Local Storange</li>
          <li @click="$router.push({name: 'Cookies'})">Cookies</li>
          <li @click="$router.push({name: 'Regexp'})">RegExp 正則表達式</li>
        </ul>
        <label>狀態管理</label>
        <ul>
          <li @click="$router.push({name: 'Vuex'})">Vuex</li>
        </ul>
        <label>多語系處理</label>
        <ul>
          <li @click="$router.push({name: 'VueI18n'})">i18n</li>
        </ul>
        <label>圖表</label>
        <ul>
          <li @click="$router.push({name: 'Dashboard'})">v-charts</li>
        </ul>
      </nav>
      <div class="footer"></div>
    </div>
    <div class="primary">
      <div class="header">
        <p>{{ getRouterName }}</p>
      </div>
      <router-view />
    </div>
  </div> -->
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      tableData: []
    };
  }
};
</script>

<style>
</style>