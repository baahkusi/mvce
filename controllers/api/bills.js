const { bills } = require('../helpers');

module.exports = async (req, res, next) => {
  const { lastModified, offset } = req.params;

  const billInfo = await bills.bills(lastModified, offset);
  console.log(billInfo);

  if (billInfo !== false) {
    return res.status(200).send({
      status: true,
      data: billInfo
    });
  }
  return res.status(500).send({
    status: false,
    message: 'Could not fetch bill info at this time'
  });
};
