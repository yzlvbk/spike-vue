// 请先安装 rollup-plugin-esbuild rollup-plugin-vue rollup-plugin-scss sass rollup-plugin-terser
// 为了保证版本一致，请复制我的 package.json 到你的项目，并把 name 改成你的库名
import esbuild from 'rollup-plugin-esbuild';
import vue from 'rollup-plugin-vue';
import less from 'rollup-plugin-scss';
import dartSass from 'sass';
import { terser } from 'rollup-plugin-terser';

export default {
	input: 'src/lib/index.js',
	output: [
		{
			globals: {
				vue: 'Vue',
			},
			name: 'spike-vue',
			file: 'package/lib/spike-vue.umd.js',
			format: 'umd',
			plugins: [terser()],
		}, {
			name: 'spike-vue',
			file: 'package/lib/spike-vue.js',
			format: 'es',
			plugins: [terser()],
		}],
	plugins: [
		less({ include: /\.scss$/, less: dartSass }),
		esbuild({
			include: /\.[jt]s$/,
			minify: process.env.NODE_ENV === 'production',
			target: 'es2015',
		}),
		vue({
			include: /\.vue$/,
		}),
	],
};
