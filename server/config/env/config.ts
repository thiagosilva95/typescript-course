//module.exports = () => require(`../env/${process.env.NODE_ENV}.env.js`);
module.exports = {
    env: 'development',
    db: 'ts-api',
    dialect: 'postgres',
    username: 'postgres',
    password: 'root',
    host: 'localhost',
    serverPort: 3000,
    pgPort: 5432,
    dbUrl: 'postgres://postegres:pgroot@localhost:5432/ts-api',
    secret: 'S3cr3t'
};