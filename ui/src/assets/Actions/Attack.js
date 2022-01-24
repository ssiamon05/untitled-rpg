

class Attack {
    constructor(damage = 15, accuracy = 95, effects=[]) {
        this._damage = damage;
        this._accuracy = accuracy;
        this._effects = effects;
    }

    //GETTERS
    get damage() {
        return this._damage;
    }

    get accuracy() {
        return this._accuracy;
    }

    get effects() {
        return this._effects;
    }

    //SETTERS
    setDamage(damage) {
        this._damage = damage;
    }
    setAccuracy(accuracy) {
        this._accuracy = accuracy;
    }
    setEffects(effects) {
        this._effects = effects;
    }

    //CLASS METHODS

}

module.exports = Attack;