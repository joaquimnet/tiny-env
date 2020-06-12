const env = require('../');
const path = require('path');

describe('Tiny Env', () => {
  test('should correctly assign the property names', () => {
    const appliedValues = env();
    expect(appliedValues).toHaveProperty('PROJECT');
    expect(appliedValues).toHaveProperty('STATUS');
    expect(appliedValues).toHaveProperty('PORT');
  });
  test('should correctly assign the property values', () => {
    const appliedValues = env();
    expect(appliedValues.PROJECT).toEqual('Tiny Env');
    expect(appliedValues.STATUS).toEqual('Passing');
    expect(appliedValues.PORT).toEqual('3000');
  });
  test('should load an arbitrary .env file', () => {
    const appliedValues = env(path.join(__dirname, '../', '.env.dev'));
    expect(appliedValues).toHaveProperty('ENVIROMENT');
    expect(appliedValues.ENVIROMENT).toEqual('Development');
    expect(appliedValues).toHaveProperty('GITHUB_URL');
    expect(appliedValues.GITHUB_URL).toEqual('https://github.com');
  });
  test("shouldn't crash if dotenv file doesn't exist", () => {
    const tryToLoadFile = () => env('non existent file');
    expect(tryToLoadFile).not.toThrow();
  });
  test('should work with relative paths', () => {
    const appliedValues = env('../.env.dev');
    expect(appliedValues).toHaveProperty('ENVIROMENT');
    expect(appliedValues.ENVIROMENT).toEqual('Development');
    expect(appliedValues).toHaveProperty('GITHUB_URL');
    expect(appliedValues.GITHUB_URL).toEqual('https://github.com');
  });
  test('should work with .env files in the app root even if not relative or absolute path', () => {
    const appliedValues = env('.env.dev');
    expect(appliedValues).toHaveProperty('ENVIROMENT');
    expect(appliedValues.ENVIROMENT).toEqual('Development');
    expect(appliedValues).toHaveProperty('GITHUB_URL');
    expect(appliedValues.GITHUB_URL).toEqual('https://github.com');
  });
});
