<template>
  <el-container>
  <side-bar class="sidebar-container"></side-bar>
  <el-container class="main-container">
    <el-header>Header</el-header>
    <app-main></app-main>
  </el-container>
</el-container>
</template>
<script lang="ts">
import { Vue,Component, Prop } from 'vue-property-decorator';
import sideBar from '@/components/layout/sideBar.vue'; // @ is an alias to /src
import appMain from '@/components/layout/appMain.vue'
@Component({
  components: {
    sideBar,
    appMain,
  },
})

export default class Home extends Vue{
  mounted(){
  }

}
</script>

<style lang="scss" scoped>
.main-container {
  min-height: 100%;
  transition: margin-left .28s;
  margin-left: 200px;
  position: relative;
}
.sidebar-container {
  transition: width 0.28s;
  width: 200px !important;
  height: 100%;
  position: fixed;
  font-size: 0px;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 1001;
  overflow: hidden;
}
.fixed-header {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  width: calc(100% - 200px);
  transition: width 0.28s;
}
</style>
