const path = require('path');

module.exports = ({ config }) => {
  config.stats = 'errors-only';

  config.module.rules = [
    {
      test: /\.module\.scss$/,
      loaders: [
        require.resolve('style-loader'),
        {
          loader: require.resolve('css-loader'),
          options: {
            importLoaders: 1,
            modules: {
              localIdentName: '[name]-[local]',
            },
          },
        },
        require.resolve('sass-loader'),
      ],
    },
    {
      test: /\.s?css$/,
      exclude: /\.module.(scss)$/,
      loader: ['style-loader', 'css-loader', require.resolve('sass-loader')],
    },
    {
      test: /\.(ts|tsx)$/,
      loader: require.resolve('babel-loader'),
      options: {
        presets: ['@babel/preset-react', '@babel/preset-typescript'],
      },
    },
    {
      test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'fonts/',
          },
        },
      ],
    },
    {
      test: /\.(png|jpg|gif)$/,
      use: [
        {
          loader: 'file-loader',
        },
      ],
    },
  ];

  config.resolve.extensions.push('.ts', '.tsx');
  config.resolve.alias['@uikit'] = path.resolve(__dirname, '../src/uikit');
  config.resolve.alias['@'] = path.resolve(__dirname, '../src');
  return config;
};
