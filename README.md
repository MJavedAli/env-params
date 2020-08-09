# env-params

env params is a library built to make development more feasible by allowing multiple .env configurations for different environments. This is done by loading environment variables from a .env._envname_ file, into the node's `process.env` object.

## Installation

`npm install env-params`

## Usage

Place this at the top of your application

```// Default configuration
require('env-params').env()
```

Create a `.env` file in your app's root directory and add the environment variables each on new line:

```
APP_ENV=dev
DB_HOST=localhost
DB_USER=root
DB_PASS=root
```

Simple! The `process.env` is now loaded with the environment variables above.

### Example

```
console.log(process.env.APP_ENV)
console.log(process.env.DB_HOST)
console.log(process.env.DB_USER)
console.log(process.env.DB_PASS)
```

### Expected Output

```
dev
localhost
root
root
```

If you want to load from a particular environment, use:

```
// This loads configuration from staging environment
require('env-params').env('staging')
```

Create a `.env.staging` file in your app's root directory and add the environment variables each on new line:

```
APP_ENV=staging
DB_HOST=localhost
DB_USER=root
DB_PASS=root
```

The `process.env` is now loaded with the environment variables above.
This completely overrides `process.env.NODE_ENV`
Try it out:

```
NODE_ENV=staging node index.js
```

### Example

```
console.log(process.env.APP_ENV)
console.log(process.env.DB_HOST)
console.log(process.env.DB_USER)
console.log(process.env.DB_PASS)
```

### Expected Output

```
staging
localhost
root
root
```

## Loading from the current environment

You can load configuration from the current environment with env-params by passing the first argument of the `env()` method as `true` (note: not required in version `2.x`) and that's all:

```
// This Loads the configuration dynamically from to the current enviroment
// Defaults to _dev_ if the environment was set
require('env-params').env(true)
```

## The `env()` method

The `env()` method holds three (3) optional arguments.
* 1 `envname` - Specifies the development name, defaults to `QA` or `testing`,
* 2 `path` - Specifies the directory to find configuration files, defaults to _current working directory_.
* 3 `defaultEnvFallback` - Specifies whether to fallback to `.env` configuration if the specified _envname_ is not found, defaults to `true`.

```
require('env-params').env('QA', 'path/to/custom/path')
```

## dotenv-expand

You can also leverage the [`dotenv-expand`](https://github.com/motdotla/dotenv-expand) extension to use ENV variable expansion inside your `.env` files.

For example:

```
IP=127.0.0.1
PORT=1234
APP_URL=http://${IP}:${PORT}
```

Using the above example `.env` file, `process.env.APP_URL` would be `http://127.0.0.1:1234`.


### What about .env.production?
We strongly recommend that you should not commit and pass `.env.production` file in production mode, as this file may contain sensitive information.



## Github Repo
[https://github.com/MJavedAli/env-params](https://github.com/MJavedAli/env-params)
