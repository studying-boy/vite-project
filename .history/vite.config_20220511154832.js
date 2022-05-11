import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import styleImport from 'vite-plugin-style-import';


export default defineConfig(({ mode, command }) => ({
  plugins: [
    vue(),
    styleImport({ 
      libs: [ { 
        libraryName: "element-plus", 
        esModule: true,  
        resolveStyle: (name) => `element-plus/es/components/${name.replace("el-","")}/style/index`
      }
    ]
  })],
}))