module.exports = {
	webpack: {
		configure: {
			output: {
				filename: 'js/main.js',
				chunkFilename: 'js/main.[id].js?v=[hash]',
			},
			optimization: {
				runtimeChunk: false,
				splitChunks: {
					cacheGroups: {
						default: false,
					},
					chunks: () => false,
				},
			},
		},
	},
}
