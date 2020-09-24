export function waitTime(time: number) {
  return new Promise((resove) => {
    setTimeout(() => {
      resove();
    }, time);
  });
};
