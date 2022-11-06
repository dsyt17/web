// const { Pool, Client } = require("pg");
import pg from "pg";

const pool = new pg.Pool({
  user: "igor",
  host: "192.168.199.57",
  password: "225506",
  port: 5432,
});
pool.query("SELECT NOW()", (err, res) => {
  console.log(err, res);
  pool.end();
});
