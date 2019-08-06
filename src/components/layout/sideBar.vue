<template>
<el-row class="tac">
  <el-col style="width:200px">
    <el-menu
      :default-active='active'
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose">
 <side-item></side-item>
    </el-menu>
  </el-col>
</el-row>
</template>
<script lang="ts">
import Vue from 'vue';
import {  Component } from 'vue-property-decorator';
import sideItem from './sideItem.vue'
@Component({
  components:{
    sideItem
  }
})
export default class sideBar extends Vue{
public active='1'
private handleOpen(key:any, keyPath:any) {
        console.log(key, keyPath);
      }
private handleClose(key:any, keyPath:any) {
        console.log(key, keyPath);
      }
}
</script>
