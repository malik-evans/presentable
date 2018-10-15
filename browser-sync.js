module.exports = {
    proxy: 'http://localhost:8000/',
    files: ['src/server/**', 'src/client/src/**'],
    reloadDelay: 1000,
    reloadDebounce: 2000
};