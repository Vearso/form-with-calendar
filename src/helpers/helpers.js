export const range = function(n) {
  return Array.apply(null, {length: n}).map((_, n) => n);
};
