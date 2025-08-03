import { Set, Workout } from "./types"
import { Exercise } from "./exercise_enums";

const set1: Set = {
    reps: 5,
    exerciseName: Exercise.BICEP_CURLS,
    weight: {
        amount: 50,
        type: "kgs"
    },
    isSuperSet: false
}

const set2: Set = {
    reps: 7,
    exerciseName: Exercise.SQUATS,
    weight: {
        amount: 55,
        type: "kgs"
    },
    isSuperSet: false
}

export const mockSets: Set[] = [set1, set2];

const date1 = new Date('2025-06-14');
// so you remember how to do both
const date2 = new Date(2025, 5, 16)

const workout1: Workout = {
    workoutId: "workout_001",
    workoutDate: date1,
    workoutName: 'chest and back',
    sets: [
        // Bench press sets
        {
            exerciseName: Exercise.BENCH_PRESS,
            isSuperSet: false,
            reps: 8,
            weight: { amount: 80, type: "kgs" }
        },
        {
            exerciseName: Exercise.BENCH_PRESS,
            isSuperSet: false,
            reps: 8,
            weight: { amount: 80, type: "kgs" }
        },
        {
            exerciseName: Exercise.BENCH_PRESS,
            isSuperSet: false,
            reps: 8,
            weight: { amount: 80, type: "kgs" }
        },
        // Dips sets
        {
            exerciseName: Exercise.DIPS,
            isSuperSet: false,
            reps: 8,
            weight: { amount: 0, type: "kgs" } // bodyweight
        },
        {
            exerciseName: Exercise.DIPS,
            isSuperSet: false,
            reps: 8,
            weight: { amount: 0, type: "kgs" }
        },
        {
            exerciseName: Exercise.DIPS,
            isSuperSet: false,
            reps: 8,
            weight: { amount: 0, type: "kgs" }
        },
        // Pull ups with chin ups superset
        {
            exerciseName: Exercise.PULL_UPS,
            isSuperSet: true,
            reps: 8,
            weight: { amount: 0, type: "kgs" },
            superSet: {
                exerciseName: Exercise.CHIN_UPS,
                reps: 8,
                weight: { amount: 0, type: "kgs" }
            }
        },
        {
            exerciseName: Exercise.PULL_UPS,
            isSuperSet: true,
            reps: 8,
            weight: { amount: 0, type: "kgs" },
            superSet: {
                exerciseName: Exercise.CHIN_UPS,
                reps: 7,
                weight: { amount: 0, type: "kgs" }
            }
        },
        {
            exerciseName: Exercise.PULL_UPS,
            isSuperSet: true,
            reps: 7,
            weight: { amount: 0, type: "kgs" },
            superSet: {
                exerciseName: Exercise.CHIN_UPS,
                reps: 6,
                weight: { amount: 0, type: "kgs" }
            }
        },
        // Lat pulldowns
        {
            exerciseName: Exercise.LAT_PULLDOWNS,
            isSuperSet: false,
            reps: 8,
            weight: { amount: 60, type: "kgs" }
        },
        {
            exerciseName: Exercise.LAT_PULLDOWNS,
            isSuperSet: false,
            reps: 8,
            weight: { amount: 60, type: "kgs" }
        }
    ]
}

const workout2: Workout = {
    workoutId: "workout_002",
    workoutDate: date2,
    workoutName: "legs",
    sets: [
        // Squats
        {
            exerciseName: Exercise.SQUATS,
            isSuperSet: false,
            reps: 8,
            weight: { amount: 100, type: "kgs" }
        },
        {
            exerciseName: Exercise.SQUATS,
            isSuperSet: false,
            reps: 8,
            weight: { amount: 100, type: "kgs" }
        },
        {
            exerciseName: Exercise.SQUATS,
            isSuperSet: false,
            reps: 8,
            weight: { amount: 100, type: "kgs" }
        },
        // Leg extensions with leg curls superset
        {
            exerciseName: Exercise.LEG_EXTENSIONS,
            isSuperSet: true,
            reps: 8,
            weight: { amount: 40, type: "kgs" },
            superSet: {
                exerciseName: Exercise.LEG_CURLS,
                reps: 8,
                weight: { amount: 35, type: "kgs" }
            }
        },
        {
            exerciseName: Exercise.LEG_EXTENSIONS,
            isSuperSet: true,
            reps: 8,
            weight: { amount: 40, type: "kgs" },
            superSet: {
                exerciseName: Exercise.LEG_CURLS,
                reps: 7,
                weight: { amount: 35, type: "kgs" }
            }
        },
        {
            exerciseName: Exercise.LEG_EXTENSIONS,
            isSuperSet: true,
            reps: 7,
            weight: { amount: 40, type: "kgs" },
            superSet: {
                exerciseName: Exercise.LEG_CURLS,
                reps: 6,
                weight: { amount: 35, type: "kgs" }
            }
        }
    ]
}

const workout3: Workout = {
    workoutId: "workout_003",
    workoutDate: date2,
    workoutName: "legs",
    sets: [
        // Squats
        {
            exerciseName: Exercise.SQUATS,
            isSuperSet: false,
            reps: 8,
            weight: { amount: 100, type: "kgs" }
        },
        {
            exerciseName: Exercise.SQUATS,
            isSuperSet: false,
            reps: 8,
            weight: { amount: 100, type: "kgs" }
        },
        {
            exerciseName: Exercise.SQUATS,
            isSuperSet: false,
            reps: 8,
            weight: { amount: 100, type: "kgs" }
        },
        // Leg extensions with leg curls superset
        {
            exerciseName: Exercise.LEG_EXTENSIONS,
            isSuperSet: true,
            reps: 8,
            weight: { amount: 40, type: "kgs" },
            superSet: {
                exerciseName: Exercise.LEG_CURLS,
                reps: 8,
                weight: { amount: 35, type: "kgs" }
            }
        },
        {
            exerciseName: Exercise.LEG_EXTENSIONS,
            isSuperSet: true,
            reps: 8,
            weight: { amount: 40, type: "kgs" },
            superSet: {
                exerciseName: Exercise.LEG_CURLS,
                reps: 7,
                weight: { amount: 35, type: "kgs" }
            }
        },
        {
            exerciseName: Exercise.LEG_EXTENSIONS,
            isSuperSet: true,
            reps: 7,
            weight: { amount: 40, type: "kgs" },
            superSet: {
                exerciseName: Exercise.LEG_CURLS,
                reps: 6,
                weight: { amount: 35, type: "kgs" }
            }
        }
    ]
}

export const weeklyData = [
    workout2,
    workout1,
    workout3,
]

export const workoutWithNoSuper: Workout = {
    workoutId: "workout_no_super",
    workoutDate: new Date('2025-06-15'),
    workoutName: 'upper body - no supersets',
    sets: [
        {
            exerciseName: Exercise.BENCH_PRESS,
            isSuperSet: false,
            reps: 10,
            weight: { amount: 75, type: "kgs" }
        },
        {
            exerciseName: Exercise.BENCH_PRESS,
            isSuperSet: false,
            reps: 8,
            weight: { amount: 80, type: "kgs" }
        },
        {
            exerciseName: Exercise.SHOULDER_PRESS,
            isSuperSet: false,
            reps: 12,
            weight: { amount: 25, type: "kgs" }
        },
        {
            exerciseName: Exercise.SHOULDER_PRESS,
            isSuperSet: false,
            reps: 10,
            weight: { amount: 30, type: "kgs" }
        },
        {
            exerciseName: Exercise.BARBELL_ROWS, // Changed "rows" to specific exercise
            isSuperSet: false,
            reps: 12,
            weight: { amount: 50, type: "kgs" }
        }
    ]
}

// Single workout with supersets
export const workoutWithSuper: Workout = {
    workoutId: "workout_with_super",
    workoutDate: new Date('2025-06-17'),
    workoutName: 'arms - with supersets',
    sets: [
        {
            exerciseName: Exercise.BICEP_CURLS,
            isSuperSet: true,
            reps: 12,
            weight: { amount: 20, type: "kgs" },
            superSet: {
                exerciseName: Exercise.TRICEP_EXTENSIONS,
                reps: 12,
                weight: { amount: 15, type: "kgs" }
            }
        },
        {
            exerciseName: Exercise.BICEP_CURLS,
            isSuperSet: true,
            reps: 10,
            weight: { amount: 22, type: "kgs" },
            superSet: {
                exerciseName: Exercise.TRICEP_EXTENSIONS,
                reps: 10,
                weight: { amount: 17, type: "kgs" }
            }
        },
        {
            exerciseName: Exercise.HAMMER_CURLS,
            isSuperSet: true,
            reps: 15,
            weight: { amount: 15, type: "kgs" },
            superSet: {
                exerciseName: Exercise.OVERHEAD_PRESS,
                reps: 12,
                weight: { amount: 12, type: "kgs" }
            }
        }
    ]
}