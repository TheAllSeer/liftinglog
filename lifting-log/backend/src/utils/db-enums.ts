import { SENSITIVES } from "./sensitives"

export const dbConfig = {
    HOST:"localhost",
    USER:"root",
    PASSWORD:SENSITIVES.password,
    DATABASE:"lifting_log"
} 


export enum INIT_QUERIES {

    //initDb
    CREATE_WORKOUTS_TABLE = `
        CREATE TABLE IF NOT EXISTS workouts (
            workout_id VARCHAR(36) PRIMARY KEY,
            workout_name VARCHAR(255) NOT NULL,
            workout_date DATE NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
            user_id VARCHAR(36) DEFAULT 'default_user',
            is_deleted BOOLEAN DEFAULT FALSE,
            INDEX idx_workout_date (workout_date),
            INDEX idx_user_id (user_id),
            INDEX idx_updated_at (updated_at)
        )
    `,
    CREATE_SETS_TABLE = `
        CREATE TABLE IF NOT EXISTS sets (
            set_id VARCHAR(36) PRIMARY KEY,
            workout_id VARCHAR(36) NOT NULL,
            set_order INT NOT NULL,
            exercise_name VARCHAR(255) NOT NULL,
            weight_amount DECIMAL(8,2) NOT NULL,
            weight_type ENUM('kgs', 'lbs') NOT NULL DEFAULT 'kgs',
            reps INT NOT NULL,
            is_super_set BOOLEAN DEFAULT FALSE,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (workout_id) REFERENCES workouts(workout_id) ON DELETE CASCADE,
            INDEX idx_workout_id (workout_id),
            INDEX idx_exercise_name (exercise_name)
        )
    `,
    CREATE_SUPERSETS_TABLE = `
        CREATE TABLE IF NOT EXISTS super_sets (
            super_set_id VARCHAR(36) PRIMARY KEY,
            set_id VARCHAR(36) NOT NULL,
            exercise_name VARCHAR(255) NOT NULL,
            weight_amount DECIMAL(8,2) NOT NULL,
            weight_type ENUM('kgs', 'lbs') NOT NULL DEFAULT 'lbs',
            reps INT NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (set_id) REFERENCES sets(set_id) ON DELETE CASCADE,
            INDEX idx_set_id (set_id)
        )
    `,
    CREATE_SYNC_METADATA_TABLE = `
        CREATE TABLE IF NOT EXISTS sync_metadata (
            id INT AUTO_INCREMENT PRIMARY KEY,
            table_name VARCHAR(50) NOT NULL,
            last_modified TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
            UNIQUE KEY unique_table (table_name)
        )
    `,
    //initialize sync metadata
    INIT_SYNC_METADATA_TABLE = `
        INSERT INTO sync_metadata (table_name) VALUES 
        ('workouts'), ('sets'), ('super_sets')
        ON DUPLICATE KEY UPDATE last_modified = CURRENT_TIMESTAMP
    `
}


export enum API_QUERIES {
    GET_WORKOUTS = `
        SELECT 
            w.workout_id, w.workout_name, w.workout_date, w.updated_at,
            s.set_id, s.set_order, s.exercise_name, s.weight_amount, 
            s.weight_type, s.reps, s.is_super_set,
            ss.exercise_name AS super_exercise_name, 
            ss.weight_amount AS super_weight_amount,
            ss.weight_type AS super_weight_type, 
            ss.reps AS super_reps
        FROM workouts w
        LEFT JOIN sets s ON w.workout_id = s.workout_id
        LEFT JOIN super_sets ss ON s.set_id = ss.set_id
        WHERE w.is_deleted = FALSE
        ORDER BY w.workout_date DESC, s.set_order ASC
    `,
    GET_WORKOUTS_WITH_SYNC = `
        SELECT 
            w.workout_id, w.workout_name, w.workout_date, w.updated_at,
            s.set_id, s.set_order, s.exercise_name, s.weight_amount, 
            s.weight_type, s.reps, s.is_super_set,
            ss.exercise_name AS super_exercise_name, 
            ss.weight_amount AS super_weight_amount,
            ss.weight_type AS super_weight_type, 
            ss.reps AS super_reps
        FROM workouts w
        LEFT JOIN sets s ON w.workout_id = s.workout_id
        LEFT JOIN super_sets ss ON s.set_id = ss.set_id
        WHERE w.is_deleted = FALSE AND w.updated_at > ?
        ORDER BY w.workout_date DESC, s.set_order ASC
    `,
    CREATE_WORKOUT = 'INSERT INTO workouts (workout_id, workout_name, workout_date, user_id) VALUES (?, ?, ?, ?)',
    CREATE_SET = `
        INSERT INTO sets (
            set_id, workout_id, set_order, exercise_name, 
            weight_amount, weight_type, reps, is_super_set
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `,
    CREATE_SUPERSET = `
        INSERT INTO super_sets (
            super_set_id, set_id, exercise_name, 
            weight_amount, weight_type, reps
        ) VALUES (?, ?, ?, ?, ?, ?)
    `,
    GET_WORKOUT_BY_ID = `SELECT workout_name, workout_date FROM workouts WHERE workout_id = ?`,
    UPDATE_WORKOUT_METADATA_BY_ID = `UPDATE workouts SET workout_name = ?, workout_date = ? WHERE workout_id = ?`,
    GET_SETS_AND_SS_BY_WORKOUT_ID = `
        SELECT 
            s.set_id, s.set_order, s.exercise_name, s.weight_amount, 
            s.weight_type, s.reps, s.is_super_set,
            ss.super_set_id, ss.exercise_name AS super_exercise_name,
            ss.weight_amount AS super_weight_amount, ss.weight_type AS super_weight_type,
            ss.reps AS super_reps
        FROM sets s
        LEFT JOIN super_sets ss ON s.set_id = ss.set_id
        WHERE s.workout_id = ?
        ORDER BY s.set_order
    `,
    DELETE_SUPERSETS_BY_WORKOUT_ID = `DELETE FROM super_sets WHERE set_id IN (SELECT set_id FROM sets WHERE workout_id = ?)`,
    DELETE_SETS_BY_WORKOUT_ID = `DELETE FROM sets WHERE workout_id = ?`,
    SET_WORKOUT_DELETED = `UPDATE workouts SET is_deleted = TRUE WHERE workout_id = ?`,
    

    



    

}