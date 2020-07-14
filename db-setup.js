const sqlite3  = require('sqlite3');
const { open } =  require('sqlite');

// this is a top-level await
(async () => {
  // open the database
  const db = await open({
    filename: './database.db',
    driver: sqlite3.Database
  });

  db.migrate();

  const people = await db.all('SELECT * FROM person');
  console.log('ALL PEOPLE', JSON.stringify(people, null, 2));

  const vehicles = await db.all('SELECT * FROM vehicle');
  console.log('ALL VEHICLES', JSON.stringify(vehicles, null, 2));
})();
