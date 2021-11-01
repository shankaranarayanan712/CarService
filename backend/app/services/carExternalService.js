const axios = require('axios');
const cheerio = require('cheerio');

async function fetchHTML(url) {
  try {
    const { data } = await axios.get(url);
    return cheerio.load(data);
  } catch (err) {
    if (err.message === 'Request failed with status code 404') {
      console.warn(`This ${url} was removed`);
    }
  }
}

module.exports.fetchHTML = fetchHTML;
