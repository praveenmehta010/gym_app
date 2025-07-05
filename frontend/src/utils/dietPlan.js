const dietPlans = {
  beginner: {
    name: "Beginner Lean Plan",
    dailyCalories: 1800,
    meals: [
      { name: "Oats & Banana", type: "breakfast", calories: 350, protein: 10, carbs: 60, fat: 8 },
      { name: "Grilled Chicken Salad", type: "lunch", calories: 400, protein: 35, carbs: 20, fat: 10 },
      { name: "Greek Yogurt & Berries", type: "snacks", calories: 200, protein: 15, carbs: 18, fat: 4 },
      { name: "Brown Rice + Paneer", type: "dinner", calories: 450, protein: 25, carbs: 55, fat: 12 },
    ],
  },

  weightGain: {
    name: "Muscle Gain Plan",
    dailyCalories: 2800,
    meals: [
      { name: "Eggs & Toast", type: "breakfast", calories: 500, protein: 30, carbs: 50, fat: 25 },
      { name: "Chicken & Rice Bowl", type: "lunch", calories: 600, protein: 40, carbs: 60, fat: 20 },
      { name: "Nuts & Whey Shake", type: "snacks", calories: 400, protein: 30, carbs: 25, fat: 18 },
      { name: "Whole Wheat Pasta", type: "dinner", calories: 550, protein: 25, carbs: 65, fat: 15 },
    ],
  },

  fatLoss: {
    name: "Fat Burn Plan",
    dailyCalories: 1500,
    meals: [
      { name: "Boiled Eggs & Apple", type: "breakfast", calories: 300, protein: 20, carbs: 25, fat: 10 },
      { name: "Quinoa Salad", type: "lunch", calories: 400, protein: 25, carbs: 35, fat: 12 },
      { name: "Protein Bar", type: "snacks", calories: 180, protein: 20, carbs: 12, fat: 7 },
      { name: "Grilled Tofu Stir Fry", type: "dinner", calories: 420, protein: 30, carbs: 30, fat: 10 },
    ],
  },
};

export default dietPlans;

