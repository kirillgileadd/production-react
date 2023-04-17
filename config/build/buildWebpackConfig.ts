import webpack from 'webpack';
import { BuildOptions } from './types/config';
import { buildRules } from './buildRules';
import { buildResolves } from './buildResolves';
import { buildPlugins } from './buildPlugins';
import { buildDevServer } from './buildDevServer';

export const buildWebpackConfig = (options: BuildOptions): webpack.Configuration => {
    const { mode, paths, isDev } = options;
    return {
        mode,
        entry: paths.entry,
        output: {
            filename: '[name].[contenthash].js',
            path: paths.build,
            clean: true,
        },
        module: {
            rules: buildRules(options),
        },
        resolve: buildResolves(options),
        plugins: buildPlugins(options),
        devtool: isDev ? 'inline-source-map' : undefined,
        devServer: isDev ? buildDevServer(options) : undefined,
    };
};
