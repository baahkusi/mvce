require('dotenv').config();

const axios = require('axios');

const govInfoBaseUrl = 'https://api.govinfo.gov';

const billsFromGovInfo = async (lastModified, offset) => {
  try {
    const page = offset * 100;
    const request = await axios.get(
      `${govInfoBaseUrl}/collections/BILLS/${lastModified}?offset=${page}&pageSize=100&api_key=${process.env.API_KEY}`
    );
    if (request.status !== 200) return false;
    const billsInfo = request.data;
    return billsInfo;
  } catch (err) {
    console.log(err);
    return false;
  }
};

const bills = async (lastModified, offset) => {
  let bil;
  bil = await billsFromGovInfo(lastModified, offset);
  console.log(bil);
  return bil;
};

module.exports = {
  bills
};
