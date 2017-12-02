# Term_Project_API

## Master Branch

API backend for the 321 embedded systems project

### Technology

* NodeJS (node)
* ExpressJS (server)
* Mongoose (mongodb orm)
* Jest (test runner)
* Babel (transpiler from ES6 to ES5)
* Gulp (automation runner)

### Commands

1. npm install - installs all dependencies contained in package.json
2. npm run build - Compiles JS files in the /src directory from ES6 to browser ready ES5 and writes them to /dist.
3. npm run test - Uses Jest to run tests located in the /src/__tests__ directory.
4. npm run start - Starts up the ExpressJS server (./dist/server.js) locally.
5. npm run deploy - deploys es5 files in dist/ to remote server. must configure a remote_conn.json file first.


