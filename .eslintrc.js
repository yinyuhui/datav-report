module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: ['plugin:vue/essential', '@vue/standard'],
    parserOptions: {
        parser: 'babel-eslint'
    },
    rules: {
        indent: ['off', 2], // Expected indentation of 2 spaces but found 4
        'space-before-function-paren': 1,
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
    }
}
