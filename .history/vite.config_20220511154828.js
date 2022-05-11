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

作者：「、皓子~
链接：https://juejin.cn/post/7044883824303407134
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。