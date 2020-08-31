export default {
  proxy: {
    "/v1": {
      target: `http://localhost:5000`,
      changeOrigin: true,
      rewrite: (path) => path.replace(/^\/v1/, ""),
    },
    // bug??
    "/undefined/v1": {
      target: `http://localhost:5000`,
      changeOrigin: true,
      rewrite: (path) => path.replace(/^\/undefined\/v1/, ""),
    },
  },
};
