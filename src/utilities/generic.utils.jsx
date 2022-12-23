export function wordCounter(str) {
  const arr = str.trim().split(" ");
  const filteredArr = arr.filter((word) => word !== "").length;

  return filteredArr;
}
