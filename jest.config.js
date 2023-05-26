module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    moduleNameMapper: {
        '\\.module\\.css$': 'identity-obj-proxy'
    },
    snapshotSerializers: ['@emotion/jest/serializer'],
}