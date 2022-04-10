export function mockTicker(callback: () => void,executeCount: number = 100) {
  for (let i = 0; i < executeCount; i++) {
    callback();
  }
}
