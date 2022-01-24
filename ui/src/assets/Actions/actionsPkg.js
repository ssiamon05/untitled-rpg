const Attack = require('./Attack');
const Spell = require('./Spell');
const actionsDB = require('./actionsDB.json');

const actionsPkg = {
    Attack: Attack,
    Spell: Spell,
    actionsDB: actionsDB
}

module.exports = actionsPkg;