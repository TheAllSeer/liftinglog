const { SENSITIVES } = require('.sensitives');

export const dbConfig = {
    HOST:"localhost",
    USER:"root",
    PASSWORD:SENSITIVES.password,
    DATABASE:"lifting_log"
} 