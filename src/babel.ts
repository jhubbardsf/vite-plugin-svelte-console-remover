import { transformSync } from "@babel/core"
import myBabelPlugin from "babel-plugin-transform-remove-console"

const baseBabel = (name: string) => {
  const babelConfig = {
    plugins: [myBabelPlugin],
  }
  return (code: any) => {
    const output = transformSync(code, babelConfig)
    return output?.code
  }
}

export { baseBabel };