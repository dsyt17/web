import pg from "pg";

const pool = new pg.Pool({
  user: "igor",
  password: "225506",
  host: "192.168.199.57",
  port: 5432,
  database: "igor",
});

export default pool;
