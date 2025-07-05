// Generic sort by name (alphabetical)
export const sortByName = (items) => {
  return [...items].sort((a, b) => a.name.localeCompare(b.name));
};

// Sort by rating (highest to lowest)
export const sortByRating = (items) => {
  return [...items].sort((a, b) => (b.rating || 0) - (a.rating || 0));
};

// Sort by distance (nearest first)
export const sortByDistance = (items) => {
  return [...items].sort((a, b) => (a.distance || Infinity) - (b.distance || Infinity));
};

// Sort by price (lowest first)
export const sortByPrice = (items) => {
  return [...items].sort((a, b) => (a.price || 0) - (b.price || 0));
};

// Sort by ranking (lowest rank = better)
export const sortByRanking = (items) => {
  return [...items].sort((a, b) => (a.rank || Infinity) - (b.rank || Infinity));
};

// Custom compound sort (e.g. top-rated nearby)
export const sortByRatingThenDistance = (items) => {
  return [...items].sort((a, b) => {
    if ((b.rating || 0) !== (a.rating || 0)) {
      return (b.rating || 0) - (a.rating || 0);
    }
    return (a.distance || Infinity) - (b.distance || Infinity);
  });
};
