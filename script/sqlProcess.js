'use strict'

const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: '&FgTS2d-s$Pa',
  database: 'electron_test'
});

connection.connect((err) => {
  if (err) {
    console.error('データベース接続に失敗しました: ', err);
    return;
  } else {
    console.log('SQLデータベースに接続しました。');
    
    process.on('message', async (message) => {
      try {
        const query = 'INSERT INTO test_comments (comment) VALUES (?)';
        const rows = await connection.execute(query, [message]);
        console.log('Message inserted successfully!');
      } catch (error) {
        console.error('Error inserting message: ', error);
      }
    });
    process.on('exit', () => {
      connection.end();
    });
  }
});

