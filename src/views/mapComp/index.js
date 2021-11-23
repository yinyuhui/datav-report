const comps = require.context('./', false, /.*\.vue$/)
const modules = comps.keys().reduce((modules, name) => {
    const moduleName = name.replace(/^\.\/(.*)\.\w+$/, '$1')
    const value = comps(name)
    if (moduleName !== 'index') {
        modules[moduleName] = value.default
    }
    return modules
}, {})

export default modules
