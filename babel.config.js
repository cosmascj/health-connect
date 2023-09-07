module.exports = api => {
  api.cache(true);

  return {
    plugins: [
      'inline-dotenv',
      [
        'module-resolver',
        {
          alias: {
            assets: './src/assets',
            components: './src/components',
            constant: './src/constant',
            core: './src/core',
            navigation: './src/navigation',
            screens: './src/screens',
            utils: './src/utils',
          },
          extensions: ['.js', '.ts', '.tsx'],
          root: ['./'],
        },
      ],
      'react-native-reanimated/plugin',
    ],
    presets: ['babel-preset-expo'],
  };
};
