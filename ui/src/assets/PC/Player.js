const Monster = require('../NPC/Monster');

class Player extends Monster{
    constructor(health=100, status=[], maxHealth=100, mana=50, maxMana=50, name='',actions= {attacks:[],spells:[]}, bag = {consumables:[], relics:[]}, job = null) {
        super(health, status, maxHealth, name, mana, maxMana, actions);
        this._bag = bag;
        this._job = job;
    }

    // GETTERS
    get bag(){
        return this._bag;
    }

    get job(){ 
        return this._job;
    }
    
    // SETTERS
    setBag(bag) {
        this._bag = bag;
    }

    setJob(job) {
        this._job = job;
    }


    // CLASS FUNCTIONS
    addToBag(item, type) {
        switch(type) {
            case 'consumable':
                this.setBag({
                    ... this.bag(),
                    consumables: [...this.consumables, item]
                });
                break;
            case 'relic':
                this.setBag({
                    ... this.bag(),
                    relics: [...this.relics, item]
                });
                break;
            default:
                const err = new Error(`item of type ${type} cannot be added to bag.`);
                console.log(err);
                break;
        }
    }
}

module.exports = Player;
