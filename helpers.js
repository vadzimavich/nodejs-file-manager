import process from 'process';

export const printCwd = () => {
  console.log(`You are currently in ${process.cwd()}`);
};