export default {
  proxy: {
    '/api': {
      target: `http://localhost:${process.env.PORT}`,
      changeOrigin: true,
      rewrite: path => path.replace(/^\/api/, '')
    }
  }
}
