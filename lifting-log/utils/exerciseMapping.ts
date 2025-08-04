export const exerciseToMuscleGroup: Record<string, { primary: string[]; secondary: string[] }> = {
   // Chest exercises
   "bench press": {
       primary: ["chest"],
       secondary: ["anterior delts", "triceps"]
   },
   "incline bench press": {
       primary: ["chest"],
       secondary: ["anterior delts", "triceps"]
   },
   "decline bench press": {
       primary: ["chest"],
       secondary: ["anterior delts", "triceps"]
   },
   "dumbbell press": {
       primary: ["chest"],
       secondary: ["anterior delts", "triceps"]
   },
   "dips": {
       primary: ["triceps"],
       secondary: ["chest", "anterior delts"]
   },
   "chest fly": {
       primary: ["chest"],
       secondary: ["anterior delts"]
   },
   "push ups": {
       primary: ["chest"],
       secondary: ["anterior delts", "triceps"]
   },

   // Back exercises
   "pull ups": {
       primary: ["lats"],
       secondary: ["rhomboids", "traps", "biceps"]
   },
   "chin ups": {
       primary: ["biceps"],
       secondary: ["lats", "rhomboids", "traps"]
   },
   "lat pulldowns": {
       primary: ["lats"],
       secondary: ["rhomboids", "traps", "biceps"]
   },
   "barbell rows": {
       primary: ["lats"],
       secondary: ["rhomboids", "traps", "biceps"]
   },
   "dumbbell rows": {
       primary: ["lats"],
       secondary: ["rhomboids", "traps", "biceps"]
   },
   "deadlifts": {
       primary: ["hamstrings", "glutes"],
       secondary: ["lats", "traps", "lower back"]
   },
   "sumo deadlifts": {
       primary: ["quads", "hamstrings", "glutes"],
       secondary: ["lats", "traps", "lower back"]
   },
   "t-bar rows": {
       primary: ["lats"],
       secondary: ["rhomboids", "traps", "biceps"]
   },

   // Shoulder exercises
   "shoulder press": {
       primary: ["anterior delts"],
       secondary: ["triceps", "traps"]
   },
   "overhead press": {
       primary: ["anterior delts"],
       secondary: ["triceps", "traps"]
   },
   "lateral raises": {
       primary: ["lateral delts"],
       secondary: ["anterior delts"]
   },
   "rear delt fly": {
       primary: ["posterior delts"],
       secondary: ["rhomboids"]
   },
   "front raises": {
       primary: ["anterior delts"],
       secondary: []
   },
   "shrugs": {
       primary: ["traps"],
       secondary: []
   },

   // Leg exercises
   "squats": {
       primary: ["quads", "hamstrings"],
       secondary: ["glutes", "calves"]
   },
   "leg press": {
       primary: ["quads", "hamstrings"],
       secondary: ["glutes"]
   },
   "leg extensions": {
       primary: ["quads"],
       secondary: []
   },
   "leg curls": {
       primary: ["hamstrings"],
       secondary: []
   },
   "lunges": {
       primary: ["quads"],
       secondary: ["glutes", "hamstrings", "calves"]
   },
   "calf raises": {
       primary: ["calves"],
       secondary: []
   },
   "romanian deadlifts": {
       primary: ["hamstrings"],
       secondary: ["glutes", "lower back"]
   },
   "hip thrusts": {
       primary: ["glutes"],
       secondary: ["hamstrings"]
   },

   // Arm exercises
   "bicep curls": {
       primary: ["biceps"],
       secondary: []
   },
   "hammer curls": {
       primary: ["biceps"],
       secondary: ["forearms"]
   },
   "tricep extensions": {
       primary: ["triceps"],
       secondary: []
   },
   "tricep dips": {
       primary: ["triceps"],
       secondary: ["anterior delts"]
   },
   "close grip bench press": {
       primary: ["triceps", "chest"],
       secondary: ["anterior delts"]
   },
   "preacher curls": {
       primary: ["biceps"],
       secondary: []
   },

   // Core exercises
   "crunches": {
       primary: ["abs"],
       secondary: []
   },
   "planks": {
       primary: ["abs"],
       secondary: ["lower back"]
   },
   "leg raises": {
       primary: ["abs"],
       secondary: []
   },
};