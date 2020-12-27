import * as reactPlugin from 'vite-plugin-react'
import type { UserConfig } from 'vite'

const config: UserConfig = {
  jsx: 'react',
  plugins: [reactPlugin],
  optimizeDeps: {
    include: ['fast-json-stable-stringify/index.js', 'zen-observable/index.js']
  }
}

export default config
