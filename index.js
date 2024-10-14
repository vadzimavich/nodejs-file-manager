import { startCLI } from './commands.js';
import process from 'process';

const username = process.env.npm_config_username || 'Anonymous';

console.log(`Welcome to the File Manager, ${username}!`);
console.log(`You are currently in ${process.cwd()}`);

startCLI(username);

