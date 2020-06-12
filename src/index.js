const fs = require('fs');
const path = require('path');
const { path: root } = require('app-root-path');

const defaultPath = path.join(root, '.env');
const trim = (value) => value.trim();
const removeQuotes = (value) => value.replace(/(^['"])|(['"]$)/g, '');

module.exports = function tinyEnv(envPath = defaultPath) {
  const fileExistsOnRoot = fs.existsSync(path.join(root, envPath));
  const isRootFile = !fs.existsSync(path.resolve(__dirname, envPath)) && fileExistsOnRoot;
  envPath = isRootFile ? path.join(root, envPath) : path.resolve(__dirname, envPath);

  if (!fs.existsSync(envPath)) {
    return;
  }
  const data = fs.readFileSync(envPath, 'utf-8');
  const lines = data.split('\n').map(trim);

  const appliedValues = {};
  lines.forEach((line) => {
    const [name, value = ''] = line
      .split(/\s*=(.+)?\s*/)
      .map(trim)
      .map(removeQuotes);
    Object.defineProperty(process.env, name, { value, writable: false });
    appliedValues[name] = value;
  });
  return appliedValues;
};
