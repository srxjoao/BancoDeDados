const { Pool } = require('pg');
//Aki começa a conexão do banco de dados com o expresse com a senha do meu postgre,usuário,localhost e o banco 
const pool = new Pool({
  connectionString: "postgres://postgres:1402@localhost:5432/projeto",
});

//O connect e utilizado para estabelecer a conexão  jumtamento com o POOL metódo mais eficaz(atualmete) 
//o poll vem do pacote node PG qual esa sendo utilizado 
pool.connect((err, client, done) => {
  if (err) {
    return console.error('Error fetching client from pool', err);
  }
  
  //O metodo query apresenta os dados do banco,ele executa comandos SQL no exemplo utilizei o * para listar todos os dados dos usuários
  client.query('SELECT * FROM projeto_bancodedados', (err, result) => {
    done(); 
    if (err) {
      return console.error('Error running query', err);
    }
    
    // Exibe os resultados da consulta
    console.log(result.rows);
  });
});
