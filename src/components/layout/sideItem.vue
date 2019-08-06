<template>
<div>
<div v-for="(item,index) in routes" :key="index">
  <el-submenu :index="resolve(index)" v-if="item.children">
     <template slot="title">
          <i class="el-icon-location"></i>
          <span>{{item.name}}</span>
        </template>
        <el-menu-item-group v-for="(items,indexs) in item.children" :key="indexs">
          <router-link :to="items.path">
          <el-menu-item :index="resolve(index,indexs)">{{items.name}}</el-menu-item>
          </router-link>
        </el-menu-item-group>
  </el-submenu>
  <router-link :to="item.path" v-else>
  <el-menu-item :index="resolve(index)">
        <i class="el-icon-menu"></i>
        <span slot="title">{{item.name}}</span>
  </el-menu-item>
  </router-link>
</div>
</div>
</template>
<script lang="ts">
import { Vue } from 'vue-property-decorator';
import route from '@/route/route.js'
export default class sideItem extends Vue{
  mounted(){
  }
  private routes= route
  private resolve(index:string,indexs:string){
    return `${index}-${indexs}`
  }
}
</script>
