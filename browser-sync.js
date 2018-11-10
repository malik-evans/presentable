module.exports = {
  port: 5000,
  proxy: 'http://localhost:8000/',
  serve: ['dist/**'],
  reloadDelay: 1000,
  reloadDebounce: 1000,
};