const carExternalAPI = require('./carExternalService');

const getCarDetails = async ($) => {
  const modelArray = [];
  const BASE_URL = 'https://en.wikipedia.org';
  const table = $.html('.wikitable > tbody > tr > th > i > a');
  // eslint-disable-next-line consistent-return
  // As the html response is huge, we would have to wait for the scrambler to operate
  return new Promise((fulfill) => {
    $(table).each(async (index, value) => {
      const modelDet = {};
      const modelDetails = await carExternalAPI.fetchHTML(`${BASE_URL}${$(value).attr('href')}`);
      const manufacturer = modelDetails.html('.hproduct .infobox-above');
      const image = modelDetails.html('.image');
      const body = modelDetails.html('.mw-redirect');
      // eslint-disable-next-line func-names
      modelDetails(manufacturer).each(function () {
        modelDet.name = modelDetails(this).text() ? modelDetails(this).text() : '';
      });
      modelDet.link = modelDetails(image).children().first()[0].attribs.src;
      modelDet.body = modelDetails(body).text();
      modelArray.push(modelDet);
      if (modelArray && modelArray.length >= 300) {
        fulfill(modelArray);
      }
    });
  });
};

const get = async () => {
  const response = {};
  try {
    const $ = await carExternalAPI.fetchHTML('https://en.wikipedia.org/wiki/List_of_automobile_sales_by_model');
    const carDetails = await getCarDetails($);
    response.code = 200;
    response.status = 'Success';
    response.data = carDetails;
  } catch (err) {
    response.code = 500;
    response.status = 'Internal Server Error';
  }
  return response;
};

module.exports = {
  get,
};
