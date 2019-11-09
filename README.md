## Tiny-env

<img src="https://raw.githubusercontent.com/motdotla/dotenv/master/dotenv.png" alt="dotenv" align="right" />

From `dotenv`, just a simple genie for loading `.env` files

### Install

```bash
npm i --save tiny-env
```

### Use

Will check if there is an `.env` file (or `.env.dev` file) in your project root path

```js
const TinyEnv = require('tiny-env')
const { data: config } = TinyEnv
module.exports = config
```