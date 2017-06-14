if (process.env.NODE_ENV == null) {
  process.env.NODE_ENV = 'test';
}

const cli = require('jest/node_modules/jest-cli/build/cli');
cli.run();
