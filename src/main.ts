// test/main.ts
import {createApp} from 'vue'
import App from './App.vue'
import 'qyani-components/dist/style.css'
import './private.css'
import qyanicomponent from 'qyani-components'
const app = createApp(App)

app.use(qyanicomponent)
app.mount('#app')
