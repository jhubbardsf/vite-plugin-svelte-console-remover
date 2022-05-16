import { baseBabel } from './babel.js'

const removeConsole = (name: string) => {
    const babelConsoleName = baseBabel(name)
    return {
        name: 'svelte-remove-console',
        apply: 'build',
        transform(_source: string, id: string) {
            if (/\.(svelte|js|ts)$/.test(id)) {
                return babelConsoleName(_source)
            }
        }
    }
}

export default removeConsole;