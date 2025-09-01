const mysql = require('mysql2/promise');
require('dotenv').config();

import { SENSITIVES } from './utils/sensitives';

async function testConnection(){
    try {
        const connection = await mysql.createConnection({
            host:'localhost',
            user:'root',
            password:SENSITIVES.password,
            database:"lifting_log"
        });
        console.log('[connection test succeeded] se bluetoosh devaish is khonnecteduh shaccessfurry')
        await connection.end();
    }catch(e){
        console.error(`[ERROR] | ${e}`)
        console.error('[connection test failed] for help seek the hot single admins in your area')
    }
}
testConnection();