export function rgb(r, g, b) {
  const result = `${Math.max(0, Math.min(r, 255)).toString(16).padStart(2, '0')}${Math.max(0, Math.min(g, 255)).toString(16).padStart(2, '0')}${Math.max(0, Math.min(b, 255)).toString(16).padStart(2, '0')}`.toUpperCase()
    console.log(result)
  return result;
}