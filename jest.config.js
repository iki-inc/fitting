module.exports = {
  roots: ['<rootDir>/lib', '<rootDir>/tests'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  testRegex: '(/tests/.*(\\.|/)(test|spec))\\.tsx?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  collectCoverage: true,
  collectCoverageFrom: [
    '**/**.{ts,tsx}',
    '!**/_*.{ts,tsx}',
    '!**/node_modules/**'
  ],
  verbose: true,
  globals: {
    'ts-jest': {
      diagnostics: false
    }
  }
}
