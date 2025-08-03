// Muscle Groups Enum
export enum MuscleGroup {
    // Upper Body
    CHEST = "chest",
    ANTERIOR_DELTS = "anterior delts",
    LATERAL_DELTS = "lateral delts", 
    POSTERIOR_DELTS = "posterior delts",
    TRICEPS = "triceps",
    BICEPS = "biceps",
    FOREARMS = "forearms",
    LATS = "lats",
    RHOMBOIDS = "rhomboids",
    TRAPS = "traps",
    LOWER_BACK = "lower back",
    
    // Lower Body
    QUADS = "quads",
    HAMSTRINGS = "hamstrings",
    GLUTES = "glutes",
    CALVES = "calves",
    
    // Core
    ABS = "abs",
    OBLIQUES = "obliques"
}

// Exercises Enum
export enum Exercise {
    // Chest
    BENCH_PRESS = "bench press",
    INCLINE_BENCH_PRESS = "incline bench press",
    DECLINE_BENCH_PRESS = "decline bench press",
    DUMBBELL_PRESS = "dumbbell press",
    DIPS = "dips",
    CHEST_FLY = "chest fly",
    PUSH_UPS = "push ups",
    
    // Back
    PULL_UPS = "pull ups",
    CHIN_UPS = "chin ups",
    LAT_PULLDOWNS = "lat pulldowns",
    BARBELL_ROWS = "barbell rows",
    DUMBBELL_ROWS = "dumbbell rows",
    DEADLIFTS = "deadlifts",
    SUMO_DEADLIFTS = "sumo deadlifts",
    T_BAR_ROWS = "t-bar rows",
    
    // Shoulders
    SHOULDER_PRESS = "shoulder press",
    OVERHEAD_PRESS = "overhead press",
    LATERAL_RAISES = "lateral raises",
    REAR_DELT_FLY = "rear delt fly",
    FRONT_RAISES = "front raises",
    SHRUGS = "shrugs",
    
    // Legs
    SQUATS = "squats",
    LEG_PRESS = "leg press",
    LEG_EXTENSIONS = "leg extensions",
    LEG_CURLS = "leg curls",
    LUNGES = "lunges",
    CALF_RAISES = "calf raises",
    ROMANIAN_DEADLIFTS = "romanian deadlifts",
    HIP_THRUSTS = "hip thrusts",
    
    // Arms
    BICEP_CURLS = "bicep curls",
    HAMMER_CURLS = "hammer curls",
    TRICEP_EXTENSIONS = "tricep extensions",
    TRICEP_DIPS = "tricep dips",
    CLOSE_GRIP_BENCH_PRESS = "close grip bench press",
    PREACHER_CURLS = "preacher curls",
    
    // Core
    CRUNCHES = "crunches",
    PLANKS = "planks",
    LEG_RAISES = "leg raises"
}

// Exercise to Muscle Group mapping using enums
export const exerciseToMuscleGroup: Record<Exercise, { primary: MuscleGroup[]; secondary: MuscleGroup[] }> = {
    // Chest exercises
    [Exercise.BENCH_PRESS]: {
        primary: [MuscleGroup.CHEST],
        secondary: [MuscleGroup.ANTERIOR_DELTS, MuscleGroup.TRICEPS]
    },
    [Exercise.INCLINE_BENCH_PRESS]: {
        primary: [MuscleGroup.CHEST],
        secondary: [MuscleGroup.ANTERIOR_DELTS, MuscleGroup.TRICEPS]
    },
    [Exercise.DECLINE_BENCH_PRESS]: {
        primary: [MuscleGroup.CHEST],
        secondary: [MuscleGroup.ANTERIOR_DELTS, MuscleGroup.TRICEPS]
    },
    [Exercise.DUMBBELL_PRESS]: {
        primary: [MuscleGroup.CHEST],
        secondary: [MuscleGroup.ANTERIOR_DELTS, MuscleGroup.TRICEPS]
    },
    [Exercise.DIPS]: {
        primary: [MuscleGroup.TRICEPS],
        secondary: [MuscleGroup.CHEST, MuscleGroup.ANTERIOR_DELTS]
    },
    [Exercise.CHEST_FLY]: {
        primary: [MuscleGroup.CHEST],
        secondary: [MuscleGroup.ANTERIOR_DELTS]
    },
    [Exercise.PUSH_UPS]: {
        primary: [MuscleGroup.CHEST],
        secondary: [MuscleGroup.ANTERIOR_DELTS, MuscleGroup.TRICEPS]
    },

    // Back exercises
    [Exercise.PULL_UPS]: {
        primary: [MuscleGroup.LATS],
        secondary: [MuscleGroup.RHOMBOIDS, MuscleGroup.TRAPS, MuscleGroup.BICEPS]
    },
    [Exercise.CHIN_UPS]: {
        primary: [MuscleGroup.BICEPS],
        secondary: [MuscleGroup.LATS, MuscleGroup.RHOMBOIDS, MuscleGroup.TRAPS]
    },
    [Exercise.LAT_PULLDOWNS]: {
        primary: [MuscleGroup.LATS],
        secondary: [MuscleGroup.RHOMBOIDS, MuscleGroup.TRAPS, MuscleGroup.BICEPS]
    },
    [Exercise.BARBELL_ROWS]: {
        primary: [MuscleGroup.LATS],
        secondary: [MuscleGroup.RHOMBOIDS, MuscleGroup.TRAPS, MuscleGroup.BICEPS]
    },
    [Exercise.DUMBBELL_ROWS]: {
        primary: [MuscleGroup.LATS],
        secondary: [MuscleGroup.RHOMBOIDS, MuscleGroup.TRAPS, MuscleGroup.BICEPS]
    },
    [Exercise.DEADLIFTS]: {
        primary: [MuscleGroup.HAMSTRINGS, MuscleGroup.GLUTES],
        secondary: [MuscleGroup.LATS, MuscleGroup.TRAPS, MuscleGroup.LOWER_BACK]
    },
    [Exercise.SUMO_DEADLIFTS]: {
        primary: [MuscleGroup.QUADS, MuscleGroup.HAMSTRINGS, MuscleGroup.GLUTES],
        secondary: [MuscleGroup.LATS, MuscleGroup.TRAPS, MuscleGroup.LOWER_BACK]
    },
    [Exercise.T_BAR_ROWS]: {
        primary: [MuscleGroup.LATS],
        secondary: [MuscleGroup.RHOMBOIDS, MuscleGroup.TRAPS, MuscleGroup.BICEPS]
    },

    // Shoulder exercises
    [Exercise.SHOULDER_PRESS]: {
        primary: [MuscleGroup.ANTERIOR_DELTS],
        secondary: [MuscleGroup.TRICEPS, MuscleGroup.TRAPS]
    },
    [Exercise.OVERHEAD_PRESS]: {
        primary: [MuscleGroup.ANTERIOR_DELTS],
        secondary: [MuscleGroup.TRICEPS, MuscleGroup.TRAPS]
    },
    [Exercise.LATERAL_RAISES]: {
        primary: [MuscleGroup.LATERAL_DELTS],
        secondary: [MuscleGroup.ANTERIOR_DELTS]
    },
    [Exercise.REAR_DELT_FLY]: {
        primary: [MuscleGroup.POSTERIOR_DELTS],
        secondary: [MuscleGroup.RHOMBOIDS]
    },
    [Exercise.FRONT_RAISES]: {
        primary: [MuscleGroup.ANTERIOR_DELTS],
        secondary: []
    },
    [Exercise.SHRUGS]: {
        primary: [MuscleGroup.TRAPS],
        secondary: []
    },

    // Leg exercises
    [Exercise.SQUATS]: {
        primary: [MuscleGroup.QUADS, MuscleGroup.HAMSTRINGS],
        secondary: [MuscleGroup.GLUTES, MuscleGroup.CALVES]
    },
    [Exercise.LEG_PRESS]: {
        primary: [MuscleGroup.QUADS, MuscleGroup.HAMSTRINGS],
        secondary: [MuscleGroup.GLUTES]
    },
    [Exercise.LEG_EXTENSIONS]: {
        primary: [MuscleGroup.QUADS],
        secondary: []
    },
    [Exercise.LEG_CURLS]: {
        primary: [MuscleGroup.HAMSTRINGS],
        secondary: []
    },
    [Exercise.LUNGES]: {
        primary: [MuscleGroup.QUADS],
        secondary: [MuscleGroup.GLUTES, MuscleGroup.HAMSTRINGS, MuscleGroup.CALVES]
    },
    [Exercise.CALF_RAISES]: {
        primary: [MuscleGroup.CALVES],
        secondary: []
    },
    [Exercise.ROMANIAN_DEADLIFTS]: {
        primary: [MuscleGroup.HAMSTRINGS],
        secondary: [MuscleGroup.GLUTES, MuscleGroup.LOWER_BACK]
    },
    [Exercise.HIP_THRUSTS]: {
        primary: [MuscleGroup.GLUTES],
        secondary: [MuscleGroup.HAMSTRINGS]
    },

    // Arm exercises
    [Exercise.BICEP_CURLS]: {
        primary: [MuscleGroup.BICEPS],
        secondary: []
    },
    [Exercise.HAMMER_CURLS]: {
        primary: [MuscleGroup.BICEPS],
        secondary: [MuscleGroup.FOREARMS]
    },
    [Exercise.TRICEP_EXTENSIONS]: {
        primary: [MuscleGroup.TRICEPS],
        secondary: []
    },
    [Exercise.TRICEP_DIPS]: {
        primary: [MuscleGroup.TRICEPS],
        secondary: [MuscleGroup.ANTERIOR_DELTS]
    },
    [Exercise.CLOSE_GRIP_BENCH_PRESS]: {
        primary: [MuscleGroup.TRICEPS, MuscleGroup.CHEST],
        secondary: [MuscleGroup.ANTERIOR_DELTS]
    },
    [Exercise.PREACHER_CURLS]: {
        primary: [MuscleGroup.BICEPS],
        secondary: []
    },

    // Core exercises
    [Exercise.CRUNCHES]: {
        primary: [MuscleGroup.ABS],
        secondary: []
    },
    [Exercise.PLANKS]: {
        primary: [MuscleGroup.ABS],
        secondary: [MuscleGroup.LOWER_BACK]
    },
    [Exercise.LEG_RAISES]: {
        primary: [MuscleGroup.ABS],
        secondary: []
    }
};