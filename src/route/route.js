 const route = [
  {name: '首页', path: '/dashboard',icon:''},
  {name: '表格', path: '/table',icon:'',
  children:
  [
    {name:'表格一',path:'/table/table1',icon:''},
    {name:'表格二',path:'/table/table2',icon:''},
    {name:'表格三',path:'/table/table3',icon:''},
  ]
  }
]
export default route