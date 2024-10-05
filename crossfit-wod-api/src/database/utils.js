import fs from 'fs';
const saveToDatabase = (DB) => {
    // synchronous and make sure that writing operation is completed before 
    // moving on to the next line of code.
    fs.writeFileSync("./src/database/db.json", JSON.stringify(DB, null, 2), {
        encoding: "utf-8"
    })
}


export default saveToDatabase;