require('dotenv').load()
const Slacka = require('./index')
const {boobs} = require('./commands')

if (!process.env.token) {
  console.error('not specified token in environment')
  process.exit(1)
}

const slacka = new Slacka({
  token: process.env.token,
  username: 'golem'
})

slacka.on('boobs', (sentReply) => {
  boobs()
    .then((url) => sentReply(url))
    .catch((e) => sentReply('Something went wrong! :('))
})