const Attack = require('./Attack');

class Spell extends Attack{
    constructor(damage = 0, accuracy = 100, effects=[], manaNeeded=10) {
        super(damage, accuracy);
        this._manaNeeded = manaNeeded;
    }

    //GETTERS
    get manaNeeded() {
        return this._manaNeeded;
    }

    //SETTERS
    setManaNeeded(manaNeeded) {
        this._manaNeeded = manaNeeded;
    }

    //CLASS METHODS

}

module.exports = Spell;