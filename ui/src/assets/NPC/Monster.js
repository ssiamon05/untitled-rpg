class Monster {
    constructor(health = 50,  status=[], maxHealth = 100, name= '', mana = 50, maxMana = 50, actions = {attacks:[],spells:[]}) {
        this._health = health;
        this._status = status;
        this._maxHealth = maxHealth;
        this._name = name;
        this._mana = mana;
        this._maxMana = maxMana;
        this._actions = actions;
    }

    // GETTERS
    get health() {
        return this._health;
    }

    get status() {
        return this._status;
    }

    get maxHealth() {
        return this._maxHealth;
    }

    get name() {
        return this._name;
    }

    get mana(){
        return this._mana;
    }    

    get maxMana() {
        return this._maxMana;
    }
        
    get actions(){
        return this._actions;
    }  
    
    // SETTERS
    setHealth(health = this.getHealth()) {
        this._health = health;
    }

    setStatus(status = this.getStatus()) {
        this._status = status;    
    }

    setMaxHealth(maxHealth = this.getMaxHealth()) {
        this._maxHealth = maxHealth;
    }

    setName(newName /*must be STRING*/) {
        this._name = newName;
    }

    setMana(mana) {
        this._mana = mana;
    }

    setMaxMana(maxMana){
        this._maxMana = maxMana;
    }

    setActions(actions) {
        this._actions = actions;
    }

    // CLASS FUNCTIONS
    addStatus(currentStatus = this.getStatus(),  newStatus/*as String*/) {
        this.setStatus(currentStatus.push(newStatus));
    }

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
        }
    }

    addToActions(action, type) {
        switch(type) {
            case 'attack':
                this.setActions({
                    ... this.actions(),
                    attacks: [...this.attacks, action]
                });
                break;
            case 'spell':
                this.setActions({
                    ... this.actions(),
                    spells: [...this.spells, action]
                });
                break;
            default:
                const err = new Error(`action of type ${action} cannot be added to actions set`);
                console.log(err);
        }
    }

    heal(currentHealth = this.getHealth(), plus = 10, maxHealth = this.getMaxHealth) {
        // check if player health is smaller than max health to prevent over healing while already at max health
        if (maxHealth > currentHealth) {
            //if so, check to see if the amount of health left is less than the added health to prevent over heals
            const healthDiff = (maxHealth -  currentHealth);
            if(healthDiff <= plus) {
                //sets playerhealth to new health
                this.setHealth(currentHealth + plus);
            } else {
                //sets player to max health
                const newPlus = plus - (plus - healthDiff);
                this.setHealth(newPlus);
            }
        }
    }

    hit( currentHealth = this.getHealth(), damage = 10 ) {
        // check if player health is not 0, if so
        if ( currentHealth - damage > 0 ) {
            // subtract damage from health
            this.setHealth(currentHealth - damage);
        } else {
            // else just set equal to zero
            this.setHealth(0);
        }
    }
}

module.exports = Monster;