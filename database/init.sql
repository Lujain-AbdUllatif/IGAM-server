BEGIN;

DROP TABLE IF EXISTS admins, agents, villages, families, help CASCADE;
DROP TYPE IF EXISTS help_type, help_status CASCADE;

CREATE TABLE admins (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL UNIQUE,
  password VARCHAR(100) NOT NULL,
  phone VARCHAR(15) NOT NULL,
  donation_budget INTEGER,
  available_packages INTEGER
);

CREATE TABLE agents (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL UNIQUE,
  password VARCHAR(100) NOT NULL,
  phone VARCHAR(15) NOT NULL,
  location VARCHAR(100) NOT NULL,
  admin_id INTEGER REFERENCES admins(id)
);

CREATE TABLE villages (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  location VARCHAR(100) NOT NULL,
  admin_id INTEGER REFERENCES admins(id)
);

CREATE TABLE families (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  code  VARCHAR(20) NOT NULL,
  phone VARCHAR(15),
  members INTEGER NOT NULL,
  village_id INTEGER REFERENCES villages(id)
);

CREATE TYPE help_type AS ENUM ('package', 'money');
CREATE TYPE help_status AS ENUM ('delivered', 'assigned');

CREATE TABLE help (
  id SERIAL PRIMARY KEY,
  type help_type,
  amount INTEGER NOT NULL,
  status help_status,
  family_id INTEGER REFERENCES families(id),
  agent_id INTEGER REFERENCES agents(id),
  admin_id INTEGER REFERENCES admins(id)
);

INSERT INTO admins (name, email, phone, password, donation_budget, available_packages)
VALUES ('Desert Stars', 'destar@gmail.com', '0587654321', '123', 2000, 1000);

INSERT INTO agents (name, email, phone, password, location, admin_id)
VALUES 
('agent_1', 'agent1@gmail.com', '0534567891','pass123','loc_1', 1),
('agent_2', 'agent2@gmail.com', '0534567891','pass123','loc_2', 1), 
('agent_3', 'agent3@gmail.com', '0534567891','pass123','loc_3', 1), 
('agent_4', 'agent4@gmail.com', '0534567891','pass123','loc_4', 1);

INSERT INTO villages (name, location, admin_id)
VALUES
('village_1','31.3945° N, 34.7539° E', 1),
('village_2','21.3485° N, 37.7839° E', 1),
('village_3','20.3485° N, 30.7839° E', 1);

INSERT INTO families (name, phone, members, code, village_id)
VALUES 
('family_1', '1234567891','8', '1qaz%$rfv', 1),
('family_2', '1234567891','9', '2qaz%$rfv', 1),
('family_3', '1234567891','3', '3qaz%$rfv', 1),
('family_4', '1234567891','2', '4qaz%$rfv', 1),
('family_5', '1234567891','8', '1qaz%$rfv', 2),
('family_6', '1234567891','9', '2qaz%$rfv', 2),
('family_7', '1234567891','3', '3qaz%$rfv', 2),
('family_8', '1234567891','2', '4qaz%$rfv', 2),
('family_9', '1234567891','8', '1qaz%$rfv', 3),
('family_10', '1234567891','9', '2qaz%$rfv', 3),
('family_11', '1234567891','3', '3qaz%$rfv', 3),
('family_12', '1234567891','2', '4qaz%$rfv', 3);

INSERT INTO help (type, amount, status, family_id, agent_id,admin_id )
VALUES 
('package', '1', 'delivered', 1, 1,1),
('package', '2', 'delivered', 1, 1,1),
('money', '100', 'delivered', 1, 1,1),
('package', '2', 'delivered', 2, 1,1),
('money', '200', 'delivered', 2, 1,1),
('package', '3', 'assigned', 3, 1,1),
('money', '300', 'assigned', 3, 1,1),
('package', '4', 'delivered', 4, 2,1),
('money', '400', 'delivered', 4, 2,1),
('package', '1', 'delivered', 5, 2,1),
('money', '500', 'delivered', 5, 2,1),
('package', '2', 'assigned', 6, 2,1),
('money', '600', 'assigned', 6, 2,1),
('package', '3', 'delivered', 7, 3,1),
('money', '700', 'delivered', 7, 3,1),
('package', '4', 'delivered', 8, 3,1),
('money', '800', 'delivered', 8, 3,1),
('package', '1', 'assigned', 9, 3,1),
('money', '900', 'assigned', 9, 3,1),
('package', '2', 'delivered', 10, 4,1),
('money', '900', 'delivered', 10, 4,1),
('package', '3', 'delivered', 11, 4,1),
('money', '1100', 'delivered', 11, 4,1),
('package', '4', 'assigned', 12, 4,1),
('money', '1200', 'assigned', 12, 4,1);

COMMIT;
