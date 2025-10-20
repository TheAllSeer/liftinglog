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

export const CREATE_SETS_TABLE = `
    CREATE TABLE IF NOT EXISTS sets (
        setId VARCHAR(255) PRIMARY KEY,
        workoutId VARCHAR(255) NOT NULL,
        exerciseName VARCHAR(255) NOT NULL,
        reps INT NOT NULL,
        weight_amount DECIMAL(10, 2) NOT NULL,
        weight_type ENUM('kgs', 'lbs') NOT NULL,
        set_order INT NOT NULL,
        is_superset BOOLEAN DEFAULT FALSE,
        parent_set_id VARCHAR(255) NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (workoutId) REFERENCES workouts(workoutId) ON DELETE CASCADE,
        FOREIGN KEY (parent_set_id) REFERENCES sets(setId) ON DELETE SET NULL
    )
`;