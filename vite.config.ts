export default {
  proxy: {
    '/api': {
      // if use this proxy, port must be the same to '.env' setting
      target: `http://localhost:5000`,
      changeOrigin: true,
      rewrite: path => path.replace(/^\/v1/, '')
    }
  }
}
