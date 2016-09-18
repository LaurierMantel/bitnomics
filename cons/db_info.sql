-- documenting & storing database setup work for the future

CREATE TABLE test_transactions(
id SERIAL PRIMARY KEY,
hash STRING UNIQUE,
version INT,
lock_time INT,
size INT,
amount INT,
fees INT,
confirmations INT,
pool STRING,
publish_time TIMESTAMP
);

CREATE TABLE outputs(
id SERIAL PRIMARY KEY,
amount INT,
spent BOOLEAN,
script STRING,
script_hex STRING,
script_type STRING,
addresses STRING,
hash STRING
);

CREATE TABLE inputs(
id SERIAL PRIMARY KEY,
previous_transaction_hash STRING,
output_index INT,
amount INT,
script STRING,
addresses STRING,
hash STRING
);

CREATE TABLE general_facts(
fact_name STRING,
field_1 STRING,
field_2 STRING,
field_3 STRING,
num_field_1 INT,
num_field_2 INT,
num_field_3 INT,
bool_field BOOLEAN
);

-- transactions per second
SELECT num_field_1 from general_facts where fact_name like 'Transactions per Second';


