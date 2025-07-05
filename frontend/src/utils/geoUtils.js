// Haversine formula to calculate distance between 2 coordinates
export const getDistanceInKm = (lat1, lon1, lat2, lon2) => {
  const toRad = (deg) => (deg * Math.PI) / 180;

  const R = 6371; // Radius of Earth in KM
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
    Math.sin(dLon / 2) ** 2;

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return +(R * c).toFixed(2);
};

// Check if within a target radius (default 10 km)
export const isWithinRadius = (userLat, userLon, targetLat, targetLon, radiusKm = 10) => {
  return getDistanceInKm(userLat, userLon, targetLat, targetLon) <= radiusKm;
};

// Format coordinates for display
export const formatCoordinates = (lat, lon) => `${lat.toFixed(4)}, ${lon.toFixed(4)}`;

