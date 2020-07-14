-- Up
CREATE TABLE Person (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    first_name TEXT,
    email TEXT
);

CREATE TABLE Vehicle (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    brand TEXT,
    model TEXT,
    ownerId INTEGER REFERENCES Person(id)
);

INSERT INTO Person (first_name, email) values ('taras', 'taras@antunes.pt');
INSERT INTO Person (first_name, email) values ('buk', 'buk@antunes.pt');

INSERT INTO Vehicle (brand, model, ownerId) values('audi', 'R8', 1);
INSERT INTO Vehicle (brand, model, ownerId) values('audi', 'R6', 1);
INSERT INTO Vehicle (brand, model, ownerId) values('mercedes', 'benz', 2);

-- Down
DROP TABLE Person;
DROP TABLE Vehicle
