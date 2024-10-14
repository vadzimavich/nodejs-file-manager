const args = process.argv.slice(2);
let username = 'Username';
args.forEach(arg => {
    if (arg.startsWith('--username=')) {
        username = arg.split('=')[1];
    }
});

console.log(`Welcome to the File Manager, ${username}!`);

const printCurrentDir = () => {
    console.log(`You are currently in ${process.cwd()}`);
};
printCurrentDir();

process.on('SIGINT', () => {
    console.log(`\nThank you for using File Manager, ${username}, goodbye!`);
    process.exit();
});
