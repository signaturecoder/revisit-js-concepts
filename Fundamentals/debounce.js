/**
 * @param {Function} func
 * @param {number} wait
 * @return {Function}
 */
export default function debounce(func, wait) {
  let interval;
  return function (...args) {
    // need to clear the old timer if the function get called again
    clearTimeout(interval);
    interval = setTimeout(() => func.apply(this, args), wait);
  };
}
