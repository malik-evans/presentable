module.exports = {
  port: 5000,
  proxy: 'http://localhost:8000/',
  serve: ['dist/browser/**'],
  files: ["dist/**"],
  reloadDelay: 1000,
  reloadDebounce: 1000,
};