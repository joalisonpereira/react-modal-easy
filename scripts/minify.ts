import minify from '@node-minify/core';
import uglifyJS from '@node-minify/uglify-js';
import { resolve, join } from 'node:path';
import { stat, readdir } from 'node:fs/promises';
import { filesize } from 'filesize';

const file = resolve('./dist/', 'main.js');

const dirSize = async (directory) => {
  const files = await readdir(directory);

  const stats = files.map((file) => stat(join(directory, file)));

  return (await Promise.all(stats)).reduce(
    (accumulator, { size }) => accumulator + size,
    0
  );
};

minify({
  compressor: uglifyJS,
  input: file,
  output: file,
  callback: async (err) => {
    if (!err) {
      const sizeInBytes = await dirSize(resolve('./dist/'));

      console.log(`Package size: ${filesize(sizeInBytes, { standard: 'si' })}`);
    }
  }
});
