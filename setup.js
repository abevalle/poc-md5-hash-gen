import {doesTableExist, createTable} from "./db.js"

const main = async () => {
    let isTableSetup = await doesTableExist('strings');
    if(isTableSetup) {
        console.log('The database is already setup. You either already ran the setup, or have a conflicting table.')
        process.exit()
    }
    createTable()
}

main()