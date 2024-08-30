import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
  connectionString: 'postgresql://training_owner:CwJtK6vOAE1x@ep-bitter-lab-a5reob9q.us-east-2.aws.neon.tech/training',
  ssl: {
    rejectUnauthorized: false // This ensures SSL is used but doesn't require verification of the certificate
  }
});

// const pool = new Pool({
//   user: 'postgres',
//   host: 'localhost',
//   database: 'training',
//   password: 'db1234',
//   port: 5432
// })

export function connect() { return pool.connect(); }
export function query(text, params) { return pool.query(text, params); }
