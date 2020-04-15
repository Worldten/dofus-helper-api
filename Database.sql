CREATE TABLE item(
    item_id INTEGER PRIMARY KEY,
    item_name TEXT,
    item_level INTEGER,
    item_type TEXT,
    item_image TEXT,
    item_recipe JSON
);

CREATE TABLE player(
    player_id SERIAL UNIQUE,
    player_mail TEXT,
    player_pwd TEXT,
    player_username VARCHAR(25),
    player_confirmedMail BOOLEAN,
    player_jobs JSON,
    player_characters JSON,
    player_createAt TIMESTAMP,
    player_lastLogin TIMESTAMP
);

CREATE TABLE equipment(
    equipment_id INTEGER PRIMARY KEY,
    equipment_name VARCHAR(25),
    equipment_items JSON,
    equipment_recipe JSON,
    player_id INTEGER REFERENCES player(player_id)
);

CREATE TABLE almanax(
    almanax_id SERIAL UNIQUE,
    almanax_date DATE,
    almanax_bonus VARCHAR(100),
    almanax_resources VARCHAR(100),
    almanax_kamas INTEGER
);