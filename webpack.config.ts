import * as path from 'path';

import * as tsconfig from './tsconfig.json';

const webpackConfig = {
    entry: {
        app:'./src/bootstrap/index'
    },
    mode: process.env.NODE_ENV === 'dev' ? 'development' : 'production',
    optimization: {
        // mysqljs breaks when minified in this way.
        minimize: false
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        libraryTarget: 'commonjs2'
    },
    plugins: [
        
    ],
    resolve: {
        // resolve common modules
        alias: Object.keys(tsconfig.compilerOptions.paths).reduce(
            (aliases, aliasName) => {
                aliases[aliasName.replace('/*', '')] = path.resolve(
                    __dirname,
                    tsconfig.compilerOptions.paths[aliasName][0].replace('/*', '')
                );
                return aliases;
            },
            {}
        ),
        extensions: ['.tsx', '.ts', '.js', '.json']
    },
    module: {
        exprContextCritical: false,
        rules: [
            {
                test: /\.tsx?$/,
                use: ['ts-loader'],
                exclude: /node_modules/
            }
        ]
    },
    target: 'node'
};

export default webpackConfig;
