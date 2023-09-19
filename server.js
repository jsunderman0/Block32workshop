const pg = require('pg');
const client = new pg.Client('postgres://localhost/ice_cream_shop_db')
const express = require('express');
const app = express();

app.get('/api/ice_cream' , async (req, res, next) => {
    try{ 
        const SQL = `
        SELECT * from ice_cream
        `;
        const response = await client.query(SQL);
        res.send(response.rows)
    }
    catch(ex){
        next(ex);
    }
})

const setup = async () => {
    await client.connect()
    console.log("connected to database")
    const SQL = `
    DROP TABLE IF EXISTS ice_cream;
    CREATE TABLE ice_cream(
        id SERIAL PRIMARY KEY,
        name VARCHAR(20)

    );

    INSERT INTO ice_cream (name) values ('vanilla');
    INSERT INTO ice_cream (name) values ('chocolate');
    INSERT INTO ice_cream (name) values ('strawberry');
    
    `;
    await client.query(SQL);
    console.log("tables created")
    const port = process.env.PORT || 3000;
    app.listen(port, () => console.log(`listening on port ${port}`))
};
setup();