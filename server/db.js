const Pool = require('pg').Pool;

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'school_register',
  password: 'ancol700',
  port: 5432,
});

module.exports = pool;
