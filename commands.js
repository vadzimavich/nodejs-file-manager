import readline from 'readline';
import { getEOL, getCPUsInfo, getHomeDir, getUsername, getArch } from './osOperations.js';
import { navigateUp, changeDirectory, listFiles } from './navigation.js';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

export const startCLI = (username) => {
  rl.on('line', async (input) => {
    const args = input.trim().split(' ');
    const command = args[0];

    switch (command) {
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

    case 'up':
      await navigateUp();
      break;

    case 'cd':
      await changeDirectory(args[1]);
      break;

    case 'ls':
      await listFiles();
      break;

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
