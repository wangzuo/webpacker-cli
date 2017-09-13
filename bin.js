#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const program = require('commander');
const init = require('./src/init');
const start = require('./src/start');
const build = require('./src/build');
const cwd = process.cwd();

const configPath = path.resolve('cxx.config.js');
const userConfig = fs.existsSync(configPath) ? require(configPath) : {};

program
  .command('init')
  .description('init')
  .action(function(options) {
    init(userConfig);
  });

program
  .command('start')
  .description('start')
  .action(function(options) {
    start(userConfig);
  });

program
  .command('build')
  .description('build')
  .action(function(options) {
    build(userConfig);
  });

program.parse(process.argv);
