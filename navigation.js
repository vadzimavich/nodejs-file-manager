import fs from 'fs/promises';
import path from 'path';
import os from 'os';
import { printCwd } from './helpers.js';

export const navigateUp = async () => {
  const currentDir = process.cwd();
  const parentDir = path.resolve(currentDir, '..');

  if (parentDir !== currentDir && parentDir.startsWith(os.homedir())) {
    process.chdir(parentDir);
    printCwd();
  } else {
    console.log('You cannot go upper than root directory.');
  }
};

export const changeDirectory = async (targetDir) => {
  if (!targetDir) {
    console.log('Invalid input');
    return;
  }

  const resolvedPath = path.resolve(process.cwd(), targetDir);
    try {
      await fs.access(resolvedPath);
      if (resolvedPath.startsWith(os.homedir())) {
        process.chdir(resolvedPath);
        printCwd();
      } else {
        console.log('Operation failed');
      }
    } catch (err) {
      console.log('Operation failed');
  }
};

export const listFiles = async () => {
  try {
    const files = await fs.readdir(process.cwd(), { withFileTypes: true });
    const directories = [];
    const regularFiles = [];

    for (const file of files) {
      if (file.isDirectory()) {
        directories.push({ Name: file.name, Type: 'directory' });
        } else {
          regularFiles.push({ Name: file.name, Type: 'file' });
        }
        }

    directories.sort((a, b) => a.Name.localeCompare(b.Name));
    regularFiles.sort((a, b) => a.Name.localeCompare(b.Name));

    console.table([...directories, ...regularFiles]);
  } catch (err) {
    console.log('Operation failed');
  }
};