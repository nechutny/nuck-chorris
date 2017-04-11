const fetch = require('node-fetch')
const cheerio = require('cheerio')

const getPictureURL = (html) => {
  const $ = cheerio.load(html)

  const imageURL = $('.photo img').attr('src')

  if (!imageURL) throw "image not found."

  return imageURL
}

const boobs = () => {
  return fetch('http://boobsofinstagram.tumblr.com/random')
    .then((t) => t.text())
    .then(getPictureURL)
    .catch((e) => console.error('[boobs] command fails', e))
}

module.exports = boobs