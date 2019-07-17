module.exports = function(wallaby) {
  process.env.NODE_ENV = "test";
  return {
    files: ["**/*.js", "!**/*.test.js", "!/node_modules/*"],

    tests: ["**/*.test.js", "!/node_modules/*"],

    env: {
      type: "node",
      runner: "node"
    },

    compilers: {
      "**/*.js?(x)": wallaby.compilers.babel()
    },

    testFramework: "jest",

    debug: true
  };
};
