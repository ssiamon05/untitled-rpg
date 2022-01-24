const Consumable = require('./Consumable');
const Relics = require('./Relics');
const itemsDB = require('./itemsDB.json');
const itemsPkg = {
    Consumable,
    Relics,
    itemsDB
}

module.exports = itemsPkg;