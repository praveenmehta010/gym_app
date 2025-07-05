// Badge definitions
export const badgeDefinitions = [
  {
    id: "streak-7",
    label: "🔥 Streak King",
    emoji: "🔥",
    description: "Logged in 7 days in a row",
    condition: (progress) => progress.loginStreak >= 7,
  },
  {
    id: "diet-master",
    label: "🥗 Diet Master",
    emoji: "🥗",
    description: "Maintained diet 90% this month",
    condition: (progress) => progress.dietAdherence >= 90,
  },
  {
    id: "rank-top-5",
    label: "🏅 Top 5%",
    emoji: "🏅",
    description: "In top 5% of leaderboard",
    condition: (progress) => progress.rankPercentile <= 5,
  },
  {
    id: "shopper",
    label: "🛍️ Gym Shopper",
    emoji: "🛍️",
    description: "Bought from shop 3+ times",
    condition: (progress) => progress.shopOrders >= 3,
  },
  {
    id: "workout-20",
    label: "💪 Iron Addict",
    emoji: "💪",
    description: "Completed 20+ workouts",
    condition: (progress) => progress.workoutCount >= 20,
  },
];

