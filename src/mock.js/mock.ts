import Mock from 'mockjs'
Mock.setup({
  timeout:500
})
const usersLogin={
  code:200,
  token:'11111',
  accessToken:'1241'
}
const usersInfo ={
  user:{
    roles:["admin"],
    name:'admin', 
    avatar:'1', 
    introduction:'admin',
    email:'admin'
  }
}
Mock.mock('/users/login','post',usersLogin)
Mock.mock('/users/info','post',usersInfo)
Mock.mock('/users/info','get',usersInfo)