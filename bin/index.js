#!/usr/bin/env node
const program = require('commander');
const preview = require('../src/preview');

/**
 * Usage.
 */

program
    .command('preview')
    .description('preview cloudflare pages')
    .alias('p')
    .action(() => preview.preview());
program.parse(process.argv);