import readline from 'readline';
import { getEOL, getCPUsInfo, getHomeDir, getUsername, getArch } from './osOperations.js';
import { navigateUp, changeDirectory, listFiles } from './navigation.js';
import { readFile, createFile, renameFile, copyFile, moveFile, deleteFile } from './fileOperations.js';
import { calculateHash } from './hash.js';
import { compressFile, decompressFile } from './compress.js';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

export const startCLI = (username) => {
  rl.on('line', async (input) => {
    const args = input.trim().split(' ');
    const command = args[0];

    switch (command) {
      // OS OPERATIONS
      case 'os':
      switch (args[1]) {
      case '--EOL':
        console.log(getEOL());
        break;
      case '--cpus':
        console.log(await getCPUsInfo());
        break;
      case '--homedir':
        console.log(getHomeDir());
        break;
      case '--username':
        console.log(getUsername());
        break;
      case '--architecture':
        console.log(getArch());
        break;
      default:
        console.log('Invalid OS command');
      }
      break;

    // NAVIGATION
    case 'up':
      await navigateUp();
      break;

    case 'cd':
      await changeDirectory(args[1]);
      break;

    case 'ls':
      await listFiles();
      break;

    // FILE OPERATIONS
      case 'cat':
        await readFile(args[1]);
        break;

      case 'add':
        await createFile(args[1]);
        break;

      case 'rn':
        await renameFile(args[1], args[2]);
        break;

      case 'cp':
        await copyFile(args[1], args[2]);
        break;

      case 'mv':
        await moveFile(args[1], args[2]);
        break;

      case 'rm':
        await deleteFile(args[1]);
        break;  

    // HASH CALC
    case 'hash':
      await calculateHash(args[1]);
      break;

    // ZIP OPERATIONS  
    case 'compress':
      await compressFile(args[1], args[2]);
      break;

    case 'decompress':
      await decompressFile(args[1], args[2]);
      break;  

    // EXIT
    case '.exit':
      console.log(`Thank you for using File Manager, ${username}, goodbye!`);
      rl.close();
      process.exit();
    default:
      console.log('Invalid input');
    }
  } );

  rl.on('SIGINT', () => {
    console.log(`\nThank you for using File Manager, ${username}, goodbye!`);
    rl.close();
    process.exit();
  });
};
