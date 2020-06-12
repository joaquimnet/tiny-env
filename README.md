## Tiny-env

<img src="https://raw.githubusercontent.com/motdotla/dotenv/master/dotenv.png" alt="dotenv" align="right" />

From `dotenv`, just a simple genie for loading `.env` files

### Install

```bash
npm i joaquimnet/tiny-env
```

Or if you're using yarn:

```bash
yarn add joaquimnet/tiny-env
```

### Use

Will check if there is an `.env` file (or `.env.dev` file) in your project root path

```js
require('tiny-env')();
// or
require('tiny-env')('.env.dev');
// or
require('tiny-env')('.env.your_custom_name');
// or
require('tiny-env')('../path/to/dot/.env');
```

### Tests

Run `yarn test` or `npm run test`

### Thanks

This version of tiny-env was forked from [d1y](https://github.com/d1y/tiny-env)
