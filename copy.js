const path = require('path');
const fs = require('fs');
const VError = require('verror');

const targetFiles = [
  '.babelrc',
  '.eslintrc.json',
  '.flowconfig',
  '.gitignore',
  '.travis.yml',
  'package.json',
  'yarn.lock',
  'src/index.js',
  'test/index.js',
];

function copy(src, dist) {
  return new Promise((resolve, reject) => {
    const r = fs.createReadStream(src);
    const w = fs.createWriteStream(dist);

    r.on('error',
      err => reject(new VError(err, "failed to read from '%s'", src)));
    w.on('error',
      err => reject(new VError(err, "failed to write to '%s'", dist)));
    w.on('close', () => resolve());

    r.pipe(w);
  });
}

const copyPromise = targetFiles.reduce((promise, file) => (
  promise.then(() => {
    console.log(`copy ${file}...`);
    const srcDir = path.dirname(file);
    if (srcDir !== '.') {
      fs.mkdirSync(path.join(process.cwd(), srcDir));
    }

    const src = path.join(__dirname, file);
    const dist = path.join(process.cwd(), file);
    return copy(src, dist);
  })
), Promise.resolve());

copyPromise.catch(err => {
  console.log('Failed to copy files:', err.message);
});
