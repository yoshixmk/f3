export default {
	proxy: {
		"/v1": {
			target: "http://localhost:5000",
			changeOrigin: true,
			// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
			rewrite: (path: string) => path.replace(/^\/v1/, ""),
		},
	},
};
