const { CronJob } = require('cron');
const workers = require('./controllers/workers');

const save_bills = () => {
  console.log('Initialize cronjob to save ejara accounts ...');
  const job = new CronJob(
    '0 */30 * * * *',
    async () => {
      console.log(`save_ejara_accounts every 30 minutes ...`);
      workers.save_bills.saveBills();
    },
    null,
    true,
    'Africa/Accra'
  );
  job.start();
};

module.exports = {
  save_bills
};
