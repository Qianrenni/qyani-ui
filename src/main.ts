// main.ts
import {createApp} from 'vue'
import App from './App.vue'
import 'qiannai-components/dist/style.css'
import './private.css'
import qiannaiComponent from 'qiannai-components'
const app = createApp(App)

app.use(qiannaiComponent)
app.mount('#app')
