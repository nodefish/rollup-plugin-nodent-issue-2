import nodent from 'rollup-plugin-nodent';

export default {
    entry: 'src/index.js',
    dest: 'dist/bundle.js',
    moduleName: 'whatever',
    format: 'iife',
    sourceMap: false,
    plugins: [
        nodent()
    ]
}