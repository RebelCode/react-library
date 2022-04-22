module.exports = ({env}) => ({
  plugins: {
    'postcss-import': {},
    'postcss-preset-env': {
      stage: 2,
      features: {
        'nesting-rules': true,
        'custom-properties': true,
        'custom-media': true,
      },
    },
    'cssnano': (env === "production") && {
      preset: [
        "default",
        {
          "discardComments": {
            "removeAll": true,
          },
        },
      ],
    },
  },
})
