const pg = require('pg');
const client = new pg.Client('postgres://localhost/ice_cream_shop_db')

const setup = async () => {
    await client.connect()
    console.log("connected to database")
    const SQL = `
    DROP TABLE IF EXISTS ice_cream;
    CREATE TABLE ice_cream(
        id SERIAL PRIMARY KEY,
        name VARCHAR(20)

    );
    INSERT INTO ice_cream (name) VALUES ('vanilla')
    INSERT INTO ice_cream (name) VALUES ('chocolate')
    INSERT INTO ice_cream (name) VALUES ('strawberry')
    INSERT INTO ice_cream (name) VALUES ('cookie dough')
    `;
    await client.query(SQL);
    console.log("tables created")
};
setup();