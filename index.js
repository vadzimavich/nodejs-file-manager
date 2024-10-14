import { startCLI } from './commands.js';
import { printCwd } from './helpers.js';
import process from 'process';
import os from 'os';

const username = process.env.npm_config_username || 'Anonymous';
process.chdir(os.homedir());

console.log(`Welcome to the File Manager, ${username}!`);
printCwd();

startCLI(username);

