export function wait(ms = 2000) {
  return new Promise(r => setTimeout(r, ms));
}
