import fs from 'fs/promises';
import path from 'path';
import { printCwd } from './helpers.js';

export const readFile = async (filePath) => {
  try {
    const data = await fs.readFile(filePath, 'utf8');
    console.log(data);
    printCwd();
  } catch (err) {
    console.log('Operation failed: ' + err.message);
  }
};

export const createFile = async (fileName) => {
  try {
    const filePath = path.resolve(process.cwd(), fileName);
    await fs.writeFile(filePath, '', { flag: 'wx' });
    console.log('File created');
    printCwd();
  } catch (err) {
    console.log('Operation failed: ' + err.message);
  }
};

export const renameFile = async (oldPath, newPath) => {
  try {
    const resolvedOldPath = path.resolve(process.cwd(), oldPath);
    const resolvedNewPath = path.resolve(process.cwd(), newPath);
    await fs.rename(resolvedOldPath, resolvedNewPath);
    console.log('File renamed');
    printCwd();
  } catch (err) {
    console.log('Operation failed: ' + err.message);
  }
};

export const copyFile = async (source, destination) => {
  try {
    const srcPath = path.resolve(process.cwd(), source);
    const destPath = path.resolve(process.cwd(), destination);
    await fs.copyFile(srcPath, destPath);
    console.log('File copied');
    printCwd();
  } catch (err) {
    console.log('Operation failed: ' + err.message);
  }
};

export const moveFile = async (source, destination) => {
  try {
    const srcPath = path.resolve(process.cwd(), source);
    const destPath = path.resolve(process.cwd(), destination);
    await fs.rename(srcPath, destPath);
    console.log('File moved');
    printCwd();
  } catch (err) {
    console.log('Operation failed: ' + err.message);
  }
};

export const deleteFile = async (filePath) => {
  try {
    const resolvedPath = path.resolve(process.cwd(), filePath);
    await fs.unlink(resolvedPath);
    console.log('File deleted');
    printCwd();
  } catch (err) {
    console.log('Operation failed: ' + err.message);
  }
};
