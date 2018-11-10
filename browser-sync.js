module.exports = {
  port: 3000,
    proxy: 'http://localhost:8000/',
    files: ['src/server/**', 'src/client/src/**'],
    reloadDelay: 1000,
  reloadDebounce: 1000,
};