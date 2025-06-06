export function humanReadable (seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  console.log((seconds % 3600) % 60)
  const secondsResult = (seconds % 3600) % 60;
  return `${hours.toString().padStart(2,"0")}:${minutes.toString().padStart(2,"0")}:${secondsResult.toString().padStart(2,"0")}`;
}
