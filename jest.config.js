module.exports = {
  preset: 'react-native',
  verbose: true,
  setupFilesAfterEnv: ['./setup.js'],
  transform: {
    '^.+\\.js$': require.resolve('react-native/jest/preprocessor.js'),
    '^.+\\.jsx?$': 'babel-jest',
  },
};
