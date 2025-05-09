export const changeTypeOfTime = (time: string | number): string => {
  // 1. If it's already a string, just return it
  if (typeof time === 'string') return time;

  // 2. Calculate the difference in milliseconds
  const diffInMs = Date.now() - time;
  
  // Convert to hours
  const hours = diffInMs / 3600000;

  if (hours < 1) {
    return "a moment ago";
  }

  if (hours >= 24) {
    const days = Math.floor(hours / 24);
    return `${days} ${days === 1 ? 'day' : 'days'} ago`;
  }

  const roundedHours = Math.floor(hours);
  return `${roundedHours} ${roundedHours === 1 ? 'hour' : 'hours'} ago`;
};