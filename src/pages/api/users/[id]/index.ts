import { NextApiRequest, NextApiResponse } from "next";
import { open } from "sqlite";
import sqlite3 from "sqlite3";

export default async function getUserById(req: NextApiRequest, res: NextApiResponse) {

    const db = await open({
        filename: './database.db',
        driver: sqlite3.Database
    });


    if (req.method === "PUT") {
        const statement = await db.prepare("UPDATE person SET first_name= ?, email= ? WHERE id= ?");

        await statement.run(
            req.body.name,
            req.body.email,
            req.query.id
        );

    }

    const user = await db.get('SELECT * FROM person WHERE id =?', [req.query.id]);

    res.json(user)
}
