const fs = require('fs');

class DatabaseConnection {
    constructor(){}

    // writeToDB(newState){
    //     fs.writeFile('./db.json', JSON.stringify(newState), (error) => {
    //         if(error){
    //             console.log(error);
    //             return null
    //         }
    //         return newState
    //     })
    // }

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