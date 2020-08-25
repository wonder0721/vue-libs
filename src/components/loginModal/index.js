import Vue from 'vue'
import Index from './index.vue'

const LoginModal = Vue.extend(Index)

function showModal() {
    const newLogin = new LoginModal()
    newLogin.$mount()
    document.body.appendChild(newLogin.$el)
    Vue.nextTick(() => {
        newLogin.show = true
    })
}

export default showModal