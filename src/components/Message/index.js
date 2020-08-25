import Vue from 'vue'
import Index from './index.vue'

let messageInstance = null
// 使用Vue.extend创建构造子类
let Messageconstructor = Vue.extend(Index)

let init = () => {
    // 实例化组件
    messageInstance = new Messageconstructor()
    // $mount如果不传选择器，将渲染为文档之外的元素，生成游离在文档之外的vNode
    messageInstance.$mount()
    // messageInstance.$el获取的是DOM元素
    document.body.appendChild(messageInstance.$el)
}

let caller = (options) => {
    if (!messageInstance) {
        init()
    }
    messageInstance.add(options)
}

export default {
    // 返回 install 函数 用于 Vue.use 注册
    install(vue) {
        vue.prototype.$message = caller
    }
}