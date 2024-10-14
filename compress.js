import { createReadStream, createWriteStream } from 'fs';
import { createBrotliCompress, createBrotliDecompress } from 'zlib';
import { pipeline } from 'stream/promises';
import path from 'path';

export const compressFile = async (source, destination) => {
  try {
    const srcPath = path.resolve(process.cwd(), source);
    const destPath = path.resolve(process.cwd(), destination + '.br');
    const readStream = createReadStream(srcPath);
    const writeStream = createWriteStream(destPath);
    const brotli = createBrotliCompress();

    await pipeline(readStream, brotli, writeStream);
    console.log('File compressed');
  } catch (err) {
    console.log('Operation failed: ' + err.message);
  }
};

export const decompressFile = async (source, destination) => {
  try {
    const srcPath = path.resolve(process.cwd(), source);
    const destPath = path.resolve(process.cwd(), destination);
    const readStream = createReadStream(srcPath);
    const writeStream = createWriteStream(destPath);
    const brotli = createBrotliDecompress();

    await pipeline(readStream, brotli, writeStream);
    console.log('File decompressed');
  } catch (err) {
    console.log('Operation failed: ' + err.message);
  }
};