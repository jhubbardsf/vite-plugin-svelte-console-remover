import {
  baseBabel
} from "./chunk-UJTTZJ64.js";

// src/index.ts
var removeConsole = (name) => {
  const babelConsoleName = baseBabel(name);
  return {
    name: "svelte-remove-console",
    apply: "build",
    transform(_source, id) {
      if (/\.(svelte|js|ts)$/.test(id)) {
        return babelConsoleName(_source);
      }
    }
  };
};
var src_default = removeConsole;
export {
  src_default as default
};
