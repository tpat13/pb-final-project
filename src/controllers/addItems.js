
const budgetRouter = require('express').Router();
budgetRouter.get('/', (req, res) => {
  return res.send(' router GET'); 
});
budgetRouter.post('/', (req, res) => {
  return res.send('router POST');
});
module.exports = budgetRouter;