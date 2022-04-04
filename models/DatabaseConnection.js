const fs = require('fs');

class DatabaseConnection {
    constructor(){}

    writeToDB(newState){
        return new Promise((resolve, reject) => {

            fs.writeFile('./core/db.json', JSON.stringify(newState), (error) => {
                if(error){
                    reject(error)
                }
                resolve(newState)
            })

        })

    }

    readFromDB(){

        return new Promise((resolve, reject) => {
            fs.readFile('./core/db.json', (error, fasts) => {
                if(error){
                    console.log(error);
                    reject(null);
                } else {
                    resolve(JSON.parse(fasts));
                }
            })
        })

    }
}

module.exports = DatabaseConnection