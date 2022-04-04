// Custom Modules
const Fast = require('./Fast.js')
const DatabaseConnection = require('./DatabaseConnection.js')

class FastFactory {
    constructor(){
    }

    // Methods
    create(start, duration, end, active) {
        return new Fast(start, duration, end, active);
    }

    createBulk() {
        let fasts = []
        const dataBaseConnection = new DatabaseConnection() 
        return new Promise((resolve, reject) => {

            dataBaseConnection.readFromDB()
                .then(data => {
                    // console.log("data", data)
                    for(let i = 0; i < data.length; i++){
                        fasts.push(this.create(data[i].start, data[i].duration, data[i].end, data[i].active));
                    }

                    resolve(fasts)
                })
                .catch(err => {
                    reject(err)
                })
        })
    }
    
}



module.exports = FastFactory;