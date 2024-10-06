document.getElementById('workout-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const fitnessLevel = document.getElementById('fitness-level').value;
    const goals = document.getElementById('goals').value;
    const equipment = document.getElementById('equipment').value;

    let workoutPlan = generateWorkoutPlan(fitnessLevel, goals, equipment);
    document.getElementById('workout-plan').innerHTML = `<h2>Your Workout Plan:</h2><p>${workoutPlan}</p>`;
});

function generateWorkoutPlan(fitnessLevel, goals, equipment) {
    // Sample workout plans based on input
    const plans = {
        beginner: {
            strength: "3 sets of 10 reps: Bodyweight Squats, Push-ups, Dumbbell Rows",
            cardio: "20 minutes of brisk walking or cycling",
            flexibility: "10 minutes of stretching exercises",
        },
        intermediate: {
            strength: "4 sets of 8 reps: Dumbbell Squats, Bench Press, Pull-ups",
            cardio: "30 minutes of jogging or interval training",
            flexibility: "15 minutes of yoga",
        },
        advanced: {
            strength: "5 sets of 5 reps: Barbell Deadlifts, Clean and Press, Muscle-ups",
            cardio: "45 minutes of HIIT",
            flexibility: "20 minutes of advanced yoga",
        },
    };

    return `${plans[fitnessLevel][goals]} using ${equipment}`;
}
