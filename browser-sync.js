module.exports = {
  port: 5000,
  proxy: 'http://localhost:8000/',
  serve: ['dist/browser/**'],
  files: ["src/**"],
  reloadDelay: 3000,
  reloadDebounce: 1000,
};