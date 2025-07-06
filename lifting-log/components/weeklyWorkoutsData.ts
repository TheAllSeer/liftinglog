const workout1 = {
        date:'14-06-2025',
        workoutName:'chest and back',
        exercises:[
            {
                exerciseName:"bench press",
                sets:[
                    {
                        isSuperset:false,
                        reps:8,
                    },
                    {
                        isSuperset:false,
                        reps:8,
                    },
                    {
                        isSuperset:false,
                        reps:8,
                    },

                ]

            },
            {
                exerciseName:"dips",
                sets:[
                    {
                        isSuperset:false,
                        reps:8,
                    },
                    {
                        isSuperset:false,
                        reps:8,
                    },
                    {
                        isSuperset:false,
                        reps:8,
                    },

                ]

            },
            {
                exerciseName:"pull ups",
                sets:[
                    {
                        isSuperset:true,
                        reps:8,
                        supetSet:{
                            exerciseName:"chin ups",
                            reps:8
                        }
                    },
                    {
                        isSuperset:true,
                        reps:8,
                        supetSet:{
                            exerciseName:"chin ups",
                            reps:7
                        }
                    },
                    {
                        isSuperset:true,
                        reps:7,
                        supetSet:{
                            exerciseName:"chin ups",
                            reps:6
                        }
                    },

                ]

            },
            {
                exerciseName:"lat pulldowns",
                sets:[
                    {
                        isSuperset:false,
                        reps:8,
                    },
                    {
                        isSuperset:false,
                        reps:8,
                    },
                ]

            },
        ]
    }
const workout2 = {
    date:'16-06-2025',
    workoutName:"legs",
    exercises:[
        {
                exerciseName:"squats",
                sets:[
                    {
                        isSuperset:false,
                        reps:8,
                    },
                    {
                        isSuperset:false,
                        reps:8,
                    },
                    {
                        isSuperset:false,
                        reps:8,
                    },

                ]

            },
            {
                exerciseName:"leg extensions",
                sets:[
                    {
                        isSuperset:true,
                        reps:8,
                        supetSet:{
                            exerciseName:"leg curls",
                            reps:8
                        }
                    },
                    {
                        isSuperset:true,
                        reps:8,
                        supetSet:{
                            exerciseName:"leg curls",
                            reps:7
                        }
                    },
                    {
                        isSuperset:true,
                        reps:7,
                        supetSet:{
                            exerciseName:"leg curls",
                            reps:6
                        }
                    },

                ]
            }
    ]
}
export const weeklyData = [
    workout2,
    workout2,
    workout1,
    workout1,
    workout1
]