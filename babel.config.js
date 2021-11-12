module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module:react-native-dotenv',
      {
        moduleName: 'react-native-dotenv',
        path: '.env',
        // blocklist: null,
        // allowlist: null,
        // blacklist: null, // DEPRECATED
        // whitelist: null, // DEPRECATED
        // safe: true,
        // allowUndefined: false,
        // verbose: false,
      },
    ],
  ],
};
