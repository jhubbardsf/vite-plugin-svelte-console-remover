// src/babel.ts
import { transformSync } from "@babel/core";
import myBabelPlugin from "babel-plugin-transform-remove-console";
var baseBabel = (name) => {
  const babelConfig = {
    plugins: [myBabelPlugin]
  };
  return (code) => {
    const output = transformSync(code, babelConfig);
    return output == null ? void 0 : output.code;
  };
};

export {
  baseBabel
};
