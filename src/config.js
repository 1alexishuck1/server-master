const { config } = require('dotenv');
config();

module.exports = {
    db : {
        user: "postgres",
        password: "1234",
        host: "localhost",
        port: 5432,
        database: "MedicalCenter"
    }
}