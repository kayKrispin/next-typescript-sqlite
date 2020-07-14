import { NextApiRequest, NextApiResponse } from "next";
import { open } from "sqlite";
import sqlite3 from "sqlite3";

export default async function getAllVehicles(req: NextApiRequest, res: NextApiResponse) {

    if (req.method !== "GET") {
        res.status(500).json({ err: "sorry only get requests" })
    }

    const db = await open({
        filename: './database.db',
        driver: sqlite3.Database
    });

    const people = await db.all('SELECT * FROM vehicle');

    res.json(people)
}
