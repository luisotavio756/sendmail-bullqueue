<h1  align="center">SendMail BullQueue + TypeScript</h1>
<h4  align="center">A minimal server that send emails using BullQueue and Redis</h4>
<p  align="center">
  <a  href="#rocket-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a  href="#information_source-how-to-use">How To Use</a>&nbsp;&nbsp;&nbsp;
</p>

## :rocket: Technologies

In the project developed with Node.js and TypeScript, it is possible send email from someone.

- [TypeScript](https://www.typescriptlang.org/)
- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/pt-br/)
- [Ts-Node-Dev](https://www.npmjs.com/package/ts-node-dev)
- [Redis](https://redis.io/)
- [BullQueue](https://github.com/OptimalBits/bull)

## :information_source: How To Use

For use, you need clone and run this steps from your command line:

**NOTE**: Before, You need rename the .env-example for .env and put your configs.

```bash
# Clone this repository
$ git clone https://github.com/luisotavio756/sendmail-bullqueue.git

# Go into the repository
$ cd sendmail-bullqueue

# Install packages
$ yarn install or npm install

# Start queue
$ yarn:dev queue or npm run dev:queue

# Run start and enjoy
$ yarn dev:server or npm run dev:server

```
---

Made with ♥ by Luis Otávio :rocket:
