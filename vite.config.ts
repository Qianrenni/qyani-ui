import {defineConfig, loadEnv} from 'vite'
import vue from '@vitejs/plugin-vue'
import {resolve} from 'path'
// https://vite.dev/config/
export default defineConfig(({mode})=>{
    const  env = loadEnv(mode,process.cwd(),'');
    const {QYANI_COMPONENTS_PATH} = env;
    return {
        plugins: [vue()],
        resolve: {
            alias: {
                '@': resolve(__dirname, 'src'),
                ...(QYANI_COMPONENTS_PATH && { 'qyani-components': QYANI_COMPONENTS_PATH})
            }
        }
    }
})
