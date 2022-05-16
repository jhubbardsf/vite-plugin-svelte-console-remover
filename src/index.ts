import { baseBabel } from './babel.js'

const apply: "build" = 'build';
const removeConsole = (name: string) => {
    const babelConsoleName = baseBabel(name)
    
    return {
        name: 'svelte-remove-console',
        apply,
        transform(_source: string, id: string) {
            if (/\.(svelte|js|ts)$/.test(id)) {
                return babelConsoleName(_source)
            }
        }
    }
}

export default removeConsole;