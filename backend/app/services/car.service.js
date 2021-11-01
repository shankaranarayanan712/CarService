const carExternalAPI = require('./carExternalService');

const getCarDetails = async ($) => {
  try {
    const modelArray = [];
    const BASE_URL = 'https://en.wikipedia.org';
    const table = $.html('.wikitable > tbody > tr > th > i > a');
    // eslint-disable-next-line consistent-return
    // As the html response is huge, we would have to wait for the scrambler to operate
    return new Promise((fulfill) => {
      $(table).each(async (index, value) => {
        const modelDet = {};
        const modelDetails = await carExternalAPI.fetchHTML(`${BASE_URL}${$(value).attr('href')}`);
        if (modelDetails) {
          const manufacturer = modelDetails.html('.hproduct .infobox-above');
          const image = modelDetails.html('.image');
          const production = modelDetails.html('.infobox-data');
          // eslint-disable-next-line func-names
          modelDetails(manufacturer).each(function () {
            modelDet.name = modelDetails(this).text() ? modelDetails(this).text() : '';
          });
          modelDet.link = modelDetails(image).children().first()[0].attribs.src;
          modelDet.body = modelDetails(production).text();
          if (production) {
            const regex1 = /19/;
            const regex2 = /18/;
            const regex3 = /17/;
            // The production year is jumbed across the html, hence do a regex search to find out
            let search = production.match(regex1);
            if (!search) {
              search = production.match(regex2);
              if (!search) {
                search = production.match(regex3);
              }
            }
            if (search && search.index) {
              // modelDet.productionDate
              let symbols = '<';
              const temp = production.substring(search.index, search.index + 15);
              symbols = temp.match(symbols);
              if (symbols) {
                modelDet.production = temp.substring(0, symbols.index);
              }
            }
          }
          if (modelDet && modelDet.name && modelDet.production) {
            modelArray.push(modelDet);
          }
          if (modelArray && modelArray.length === 200) {
            fulfill(modelArray);
          }
        }
      });
    });
  } catch (err) {
    console.log('Err', err);
  }
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
