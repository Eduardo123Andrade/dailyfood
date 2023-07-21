module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            authentication: "./src/authentication",
            core: "./src/core",
            theme: "./src/theme"
          }
        }
      ],
    ]
  
  };
};


