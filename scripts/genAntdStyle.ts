import { extractStyle } from 'ant-design-vue/es/_util/static-style-extract'
import { ConfigProvider, theme } from 'ant-design-vue/es'
import { h } from 'vue'
import fsExtra from 'fs-extra'
export const genAntdStyle = async () => {
  const css = extractStyle()
  await fsExtra.outputFile('public/css/antd.css', css, 'utf8')
}

export const genAntdStyleDarkMode = async () => {
  const css = extractStyle((node) => {
    return h(ConfigProvider, { theme: { algorithm: theme.darkAlgorithm } }, {
      default: () => node,
    })
  })
  await fsExtra.outputFile('public/css/antd.dark.css', css, 'utf8')
}
genAntdStyleDarkMode()
