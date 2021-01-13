const takeAChance = require('./take-a-chance');

const chance = takeAChance("Lucca");

function sucess (value) {
  console.log(value)
}

function failure (error) {
  console.log(error.message)
}

chance.then(sucess).catch(failure)
