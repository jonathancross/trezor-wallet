module.exports = {
    rootDir: './src',
    automock: false,
    coverageDirectory: '../coverage/',
    collectCoverage: true,
    testURL: 'http://localhost',
    testPathIgnorePatterns: [
        'test',
    ],
    modulePathIgnorePatterns: [
        'node_modules',
        'test',
        'utils/windowUtils.js',
        'utils/promiseUtils.js',
        'utils/networkUtils.js',
    ],
    collectCoverageFrom: [
        'utils/**.js',
        'reducers/utils/**.js',
    ],
    setupFiles: [
        './support/setupJest.js',
    ],
};
