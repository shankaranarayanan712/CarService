const carService = require('../services/car.service');

// get Transactions
const get = async (req, res) => {
  let response;
  try {
    response = await carService.get();
  } catch (err) {
    response = err;
    console.error('Err is:', err);
  }
  return res.json(response);
};

module.exports = {
  get,
};
