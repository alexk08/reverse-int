module.exports = function reverse (n) {
  let natural = (n < 0) ? (-1)*n : n;
  return Number(String(natural).split('').reverse().join(''));
}
