'use strict'

const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: '&FgTS2d-s$Pa',
  database: 'electron_test'
});

connection.connect((err) => {
  if(err) {
    console.error('データベース接続に失敗しました: ', err);
    return;
  } else {
    console.log('SQLデータベースに接続しました。');
    
  }
});