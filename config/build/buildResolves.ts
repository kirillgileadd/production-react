import { ResolveOptions } from 'webpack';
import { BuildOptions } from './types/config';

export const buildResolves = (options: BuildOptions): ResolveOptions => ({
    extensions: ['.tsx', '.ts', '.js'],
    modules: [options.paths.src, 'node_modules'],
    preferAbsolute: true,
    alias: {},
});
