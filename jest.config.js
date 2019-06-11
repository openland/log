module.exports = {
    testEnvironment: 'jsdom',
    transform: {
        "^.+\\.tsx?$": "ts-jest"
    },
    moduleFileExtensions: [
        'ts',
        'tsx',
        'js',
        'jsx',
        'json',
        'node'
    ],
    testRegex: '.*\\.spec\\.tsx?$',
    testPathIgnorePatterns: ['/node_modules/', '/build/', '/dist/'],
    coverageDirectory: 'coverage',
    collectCoverageFrom: [
        'packages/**/*.{ts,tsx,js,jsx}',
        '!packages/**/*.d.ts',
    ],
    moduleDirectories: [
        '.',
        'packages',
        'node_modules'
    ],
    moduleNameMapper: {

        //
        // WARNING: ORDER MATTERS
        //
        '@openland/log/(.*)': '<rootDir>/packages/log/$1',
        '@openland/log': '<rootDir>/packages/log'
    },
};