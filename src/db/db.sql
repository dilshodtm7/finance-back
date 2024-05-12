
CREATE TABLE login(
    id uuid primary key,
    email VARCHAR(32),
    password VARCHAR(36),
    status VARCHAR(16) default null
);