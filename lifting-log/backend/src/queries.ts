export const CREATE_WORKOUTS_TABLE = `
    CREATE TABLE IF NOT EXISTS workouts (
        workoutId VARCHAR(255) PRIMARY KEY,
        workoutName VARCHAR(255) NOT NULL,
        workoutDate DATETIME NOT NULL,
        is_deleted BOOLEAN DEFAULT FALSE,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    )
`;

export const GET_ALL_WORKOUTS = `
    SELECT workoutId, workoutName, workoutDate, is_deleted
    FROM workouts
    WHERE is_deleted = false
    ORDER BY workoutDate DESC
`;

export const INSERT_WORKOUT = `
    INSERT INTO workouts (workoutId, workoutName, workoutDate, is_deleted)
    VALUES (?, ?, ?, false)
`;