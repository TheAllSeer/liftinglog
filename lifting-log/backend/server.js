require('dotenv').config();
const express = require('express');
const mysql = require('mysql2/promise');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');


const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const dbConfig = {
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME || 'lifting_log'
};

let db;


async function initDb(){
  try{
    console.log('connecting to db')
    db = await mysql.createConnection(dbConfig);
    console.log('successfully connected to mysql db');

  }catch(e){
    console.error('womp womp');
    console.error(e);
  }
}


