//入口文件
import Vue from 'vue'

//导入App 根组件
import app from './App.vue'

//按需导入 Mint-UI 中的组件
import {Header} from 'mint-ui'
Vue.component(Header.name, Header)

//导入 MUI 的样式
import './lib/mui/css/mui.min.css'


var vm = new Vue({
	el:'#app',

	render: c => c(app)
})