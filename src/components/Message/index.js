import Vue from 'vue'
import Index from './index.vue'

let messageInstance = null
let Messageconstructor = Vue.extend(Index)

let init = () => {
    messageInstance = new Messageconstructor()
    messageInstance.$mount()
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