import { Set, Workout } from "./types"

const set1: Set = {
    reps: 5,
    exerciseName: "Bicep Curls",
    weight: {
        amount: 50,
        type: "kgs"
    },
    isSuperSet: false
}

const set2: Set = {
    reps: 7,
    exerciseName: "Squats",
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
            exerciseName: "bench press",
            isSuperSet: false,
            reps: 8,
            weight: { amount: 80, type: "kgs" }
        },
        {
            exerciseName: "bench press",
            isSuperSet: false,
            reps: 8,
            weight: { amount: 80, type: "kgs" }
        },
        {
            exerciseName: "bench press",
            isSuperSet: false,
            reps: 8,
            weight: { amount: 80, type: "kgs" }
        },
        // Dips sets
        {
            exerciseName: "dips",
            isSuperSet: false,
            reps: 8,
            weight: { amount: 0, type: "kgs" } // bodyweight
        },
        {
            exerciseName: "dips",
            isSuperSet: false,
            reps: 8,
            weight: { amount: 0, type: "kgs" }
        },
        {
            exerciseName: "dips",
            isSuperSet: false,
            reps: 8,
            weight: { amount: 0, type: "kgs" }
        },
        // Pull ups with chin ups superset
        {
            exerciseName: "pull ups",
            isSuperSet: true,
            reps: 8,
            weight: { amount: 0, type: "kgs" },
            superSet: {
                exerciseName: "chin ups",
                reps: 8,
                weight: { amount: 0, type: "kgs" }
            }
        },
        {
            exerciseName: "pull ups",
            isSuperSet: true,
            reps: 8,
            weight: { amount: 0, type: "kgs" },
            superSet: {
                exerciseName: "chin ups",
                reps: 7,
                weight: { amount: 0, type: "kgs" }
            }
        },
        {
            exerciseName: "pull ups",
            isSuperSet: true,
            reps: 7,
            weight: { amount: 0, type: "kgs" },
            superSet: {
                exerciseName: "chin ups",
                reps: 6,
                weight: { amount: 0, type: "kgs" }
            }
        },
        // Lat pulldowns
        {
            exerciseName: "lat pulldowns",
            isSuperSet: false,
            reps: 8,
            weight: { amount: 60, type: "kgs" }
        },
        {
            exerciseName: "lat pulldowns",
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
            exerciseName: "squats",
            isSuperSet: false,
            reps: 8,
            weight: { amount: 100, type: "kgs" }
        },
        {
            exerciseName: "squats",
            isSuperSet: false,
            reps: 8,
            weight: { amount: 100, type: "kgs" }
        },
        {
            exerciseName: "squats",
            isSuperSet: false,
            reps: 8,
            weight: { amount: 100, type: "kgs" }
        },
        // Leg extensions with leg curls superset
        {
            exerciseName: "leg extensions",
            isSuperSet: true,
            reps: 8,
            weight: { amount: 40, type: "kgs" },
            superSet: {
                exerciseName: "leg curls",
                reps: 8,
                weight: { amount: 35, type: "kgs" }
            }
        },
        {
            exerciseName: "leg extensions",
            isSuperSet: true,
            reps: 8,
            weight: { amount: 40, type: "kgs" },
            superSet: {
                exerciseName: "leg curls",
                reps: 7,
                weight: { amount: 35, type: "kgs" }
            }
        },
        {
            exerciseName: "leg extensions",
            isSuperSet: true,
            reps: 7,
            weight: { amount: 40, type: "kgs" },
            superSet: {
                exerciseName: "leg curls",
                reps: 6,
                weight: { amount: 35, type: "kgs" }
            }
        }
    ]
}

export const weeklyData = [
    workout2,
    workout1,
    workout1,
]

export const workoutWithNoSuper: Workout = {
    workoutId: "workout_no_super",
    workoutDate: new Date('2025-06-15'),
    workoutName: 'upper body - no supersets',
    sets: [
        {
            exerciseName: "bench press",
            isSuperSet: false,
            reps: 10,
            weight: { amount: 75, type: "kgs" }
        },
        {
            exerciseName: "bench press",
            isSuperSet: false,
            reps: 8,
            weight: { amount: 80, type: "kgs" }
        },
        {
            exerciseName: "shoulder press",
            isSuperSet: false,
            reps: 12,
            weight: { amount: 25, type: "kgs" }
        },
        {
            exerciseName: "shoulder press",
            isSuperSet: false,
            reps: 10,
            weight: { amount: 30, type: "kgs" }
        },
        {
            exerciseName: "rows",
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
            exerciseName: "bicep curls",
            isSuperSet: true,
            reps: 12,
            weight: { amount: 20, type: "kgs" },
            superSet: {
                exerciseName: "tricep extensions",
                reps: 12,
                weight: { amount: 15, type: "kgs" }
            }
        },
        {
            exerciseName: "bicep curls",
            isSuperSet: true,
            reps: 10,
            weight: { amount: 22, type: "kgs" },
            superSet: {
                exerciseName: "tricep extensions",
                reps: 10,
                weight: { amount: 17, type: "kgs" }
            }
        },
        {
            exerciseName: "hammer curls",
            isSuperSet: true,
            reps: 15,
            weight: { amount: 15, type: "kgs" },
            superSet: {
                exerciseName: "overhead press",
                reps: 12,
                weight: { amount: 12, type: "kgs" }
            }
        }
    ]
}