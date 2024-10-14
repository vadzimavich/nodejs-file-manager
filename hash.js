import { createHash } from 'crypto';
import fs from 'fs/promises';
import path from 'path';

export const calculateHash = async (filePath) => {
  try {
    const resolvedPath = path.resolve(process.cwd(), filePath);
    const fileBuffer = await fs.readFile(resolvedPath);
    const hashSum = createHash('sha256');
    hashSum.update(fileBuffer);
    const hex = hashSum.digest('hex');
    console.log(hex);
  } catch (err) {
    console.log('Operation failed');
  }
};