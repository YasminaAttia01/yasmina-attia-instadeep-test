import pg from 'pg';

const pool = new pg.Pool({
  user: 'postgres',               
  host: 'db',        
  database: 'task',               
  password: 'postgres',           
  port: 5432,                     
});

pool.connect((err, client, release) => {
  if (err) {
    console.error('Erreur de connexion à la base de données', err.stack);
    process.exit(1);  
  } else {
    console.log('Connecté à la base de données');
    release();  
  }
});


export default pool;
