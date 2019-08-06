<template>
  <div class="container">
    <div class="top">
      <div class="header">
        <img src="@/assets/logo.png">
        <b>金华市网络商品交易监测维权系统</b>
      </div>
    </div>
    <div class="login-form">
      <div class="adminform">
        <div class="admintabs">
          <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="管局用户" name="first">管局用户</el-tab-pane>
    <el-tab-pane label="企业用户" name="second">企业用户</el-tab-pane>
  </el-tabs>
        </div>
        <div class="admin-tabs-content">
          <el-form :inline="true" :model="loginForm"  ref="loginForm"   class="demo-form-inline">
  <el-form-item label="用户名" prop="username" :rules="loginRules.username">
    <el-input v-model="loginForm.username" placeholder="用户名" autocomplete="on" ></el-input>
  </el-form-item>
 <el-form-item label="密码" prop="password" :rules="loginRules.password">
    <el-input :key="passwordType" v-model="loginForm.password" placeholder="密码" autocomplete="on" :type="passwordType" ></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="onSubmit" :loading="loading">登 录</el-button>
  </el-form-item>
</el-form>
        </div>
      </div>
    </div>
    <div class="footer">
      <div>Copyright <i class="anticon anticon-copyright"></i> 2019 浙江善政科技有限公司</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import { Route } from 'vue-router'
import { Form as ElForm, Input } from 'element-ui'
import { Dictionary } from 'vuex'
import HelloWorld from '@/components/HelloWorld.vue'; 
import { UserModule } from '@/store/modules/user'
import axios from 'axios'
@Component({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {
  private validateUsername = (rule: any, value: string, callback: Function) => {
    if (!value) {
      callback(new Error('用户名不能为空'))
    } else {
      callback()
    }
  }
  private validatePassword = (rule: any, value: string, callback: Function) => {
    if (value.length < 6) {
      callback(new Error('密码不能少于6位'))
    } else {
      callback()
    }
  }
  private dynamicValidateForm={
          domains: [{
            value: ''
          }],
          email: ''
        }
  private loginForm = {
    username: 'admin',
    password: '111111'
  }
  private inlineMessage:boolean = true
  private passwordType = 'password'
  private loading = false
  private activeName='first'
  private redirect?: string
  private otherQuery: Dictionary<string> = {}
  private loginRules = {
    username: [{ validator: this.validateUsername, trigger: 'blur' ,required: true }],
    password: [{ validator: this.validatePassword, trigger: 'blur' ,required: true}]
  }
  private login() {
     this.$router.push({
          path: '/dashboard',
        });
  }
  private mounted(){
    axios.get('/users/info').then(
      res=>{
        console.log(res)
      }
    )
  }
  @Watch('$route', { immediate: true })
  private onRouteChange(route: Route) {
    const query = route.query as Dictionary<string>
    if (query) {
      this.redirect = query.redirect
      this.otherQuery = this.getOtherQuery(query)
    }
  }
  private getOtherQuery(query: Dictionary<string>) {
  return Object.keys(query).reduce((acc, cur) => {
    if (cur !== 'redirect') {
      acc[cur] = query[cur]
    }
    return acc
   }, {} as Dictionary<string>)
 }

  private handleClick(tab, event) {
    console.log(tab, event);
  }
  private onSubmit() {
    return (this.$refs.loginForm as ElForm).validate(async(valid: boolean) => {
      if (valid) {
        this.loading = true
       await UserModule.Login(this.loginForm)
        this.$router.push({
          path: this.redirect || '/',
          query: this.otherQuery
        })
        setTimeout(() => {
          this.loading = false
        }, 0.5 * 1000)
      } else {
        return false
      }
    })
  }
}
</script>
<style scoped>
.header{
  display: flex;
  flex-direction:column;
  align-items:center;
  justify-content: center
}
.header img{
  height: 85px;
  width: 80px
}
.header b{
  font-size: 45px;
  margin-top: 10px
}
.login-form{
  position:absolute;
  bottom: 100px;
}
.adminform{
  width: 680px;
}
.admin-tabs-content{
  width: 100%;
  line-height: 1.5;
  color: rgba(0,0,0,.65);
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 0;
  list-style: none;
  display: inline-block;
  background: hsla(0,0%,100%,.8);
  padding: 22px;
  padding-bottom: 0;
  border-top: 0;
  border-radius: 3px;
}
.top{
  padding-top:3%
}
.footer{
  position:fixed;
  bottom: 45px;
  color: #ffffff;
  font-size: 14px;
}
</style>
