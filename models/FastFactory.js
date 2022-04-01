// Custom Modules
const Fast = require('./Fast.js')
const data = require('../core/db.json')

class FastFactory {
    constructor(){}

    // Methods
    create(start, duration, end, active) {
        return new Fast(start, duration, end, active);
    }

    createBulk() {
        let fasts = [];
        
        for(let i = 0; i < data.length; i++){
            fasts.push(this.create(data[i].start, data[i].duration, data[i].end, data[i].active));
        }

        return fasts;
    }
    
}



module.exports = FastFactory;