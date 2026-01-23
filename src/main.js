import AlertBox from './AlertBox.vue'
import App from './App.vue'
import './assets/main.css'

import { createApp } from 'vue'
import BlogPost from './BlogPost.vue'

const app = createApp(App)

app.component('AlertBox', AlertBox).component('BlogPost', BlogPost)

app.mount('#app')
